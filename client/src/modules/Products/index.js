import api from '../service'
import {createAction} from 'redux-actions'

const PRODUCTS_API_REQUEST = 'modules/Products/API_REQUEST'

export const getProducts = createAction(PRODUCTS_API_REQUEST, () => {
  return api.get('/products')
})

export default {
  reducer: {
    [PRODUCTS_API_REQUEST]: (state, action) => ({
      ...state,
      products: action.payload.data
    })
  }
}
