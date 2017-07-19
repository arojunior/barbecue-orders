import {change} from 'redux-form'
import {
  addProduct,
  deleteProduct,
  changeCompany,
  submitOrder
} from '../../../modules/Orders'

export default {
  handleSubmit: ({dispatch}) => values => {
    dispatch(addProduct(values))
    dispatch(change('formNewOrder', 'quantity', ''))
    dispatch(change('formNewOrder', 'product', ''))
  },
  deleteProduct: ({dispatch}) => id => dispatch(deleteProduct(id)),
  changeCompany: ({dispatch}) => e => dispatch(changeCompany(e.target.value)),
  submitOrder: ({dispatch, order_items, order_company}) => () =>
    dispatch(submitOrder({order_items, order_company}))
}
