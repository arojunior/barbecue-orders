import { createAction } from 'redux-actions';
import { merge } from 'ramda';
import api from '../service';
import { redirect } from '../Router';
import { getOrdersByCompany } from '../Companies';

const ADD_PRODUCT = 'modules/Orders/ADD_PRODUCT';
const DELETE_PRODUCT = 'modules/Orders/DELETE_PRODUCT';
const SUBMIT_ORDER = 'modules/Orders/SUBMIT';
const CANCEL_ORDER = 'modules/Orders/CANCEL';
const ORDER_COMPANY = 'modules/Orders/CHANGE_COMPANY';

export const addProduct = createAction(ADD_PRODUCT);
export const deleteProduct = createAction(DELETE_PRODUCT);
export const submitOrder = createAction(
  SUBMIT_ORDER,
  ({ order_items, order_company }) => {
    const values = { order_items, order_company };
    return api.post('/orders', values);
  }
);
export const cancelOrder = createAction(CANCEL_ORDER, (id) => {
  return api.delete(`/orders/${id}`);
});
export const changeCompany = createAction(ORDER_COMPANY);

export default {
  reducer: {
    [ADD_PRODUCT]: (state, action) => {
      const item = merge(
        state.products.filter((prod) => prod.id === action.payload.product)[0],
        { quantity: action.payload.quantity }
      );

      return {
        ...state,
        order_items: [item].concat(state.order_items),
      };
    },

    [DELETE_PRODUCT]: (state, action) => {
      const id = action.payload;

      return {
        ...state,
        order_items: state.order_items.filter((prod) => prod.id !== id),
      };
    },

    [ORDER_COMPANY]: (state, action) => ({
      ...state,
      order_company: action.payload,
    }),

    [SUBMIT_ORDER]: (state, action) => ({
      ...state,
      order_items: [],
      order_company: '',
    }),
  },
  middleware: {
    [SUBMIT_ORDER]: ({ dispatch }) => (next) => async (action) => {
      const result = await next(action);
      dispatch(redirect('/dashboard'));
      return result;
    },
    [CANCEL_ORDER]: (store) => (next) => async (action) => {
      await next(action);
      const id = store.getState().company_orders.company.id;

      return store.dispatch(getOrdersByCompany(id));
    },
  },
};
