import api from '../service'
import {createAction} from 'redux-actions'
import {redirect} from '../Router'

const NEW_COMPANY_REQUEST = 'modules/Companies/API_REQUEST_NEW'
const COMPANY_ORDERS_REQUEST = 'modules/Companies/API_REQUEST_ORDERS'
const ORDERS_BY_COMPANY = 'modules/Companies/ORDERS'

export const companiesAction = createAction(NEW_COMPANY_REQUEST, values => {
  return api.post('/companies', values)
})

export const getCompaniesAndOrders = createAction(
  COMPANY_ORDERS_REQUEST,
  user => {
    return api.get('/companies/orders', {
      headers: {
        Authorization: 'Bearer ' + user.token
      }
    })
  }
)

export const getOrdersByCompany = createAction(ORDERS_BY_COMPANY, id => {
  return api.get(`/companies/${id}/orders`)
})

export default {
  reducer: {
    [NEW_COMPANY_REQUEST]: {
      throw: (state, action) => ({
        ...state,
        error: action.payload.response.data.msg
      })
    },
    [COMPANY_ORDERS_REQUEST]: (state, action) => ({
      ...state,
      companies: action.payload.data
    }),
    [ORDERS_BY_COMPANY]: (state, action) => ({
      ...state,
      company_orders: action.payload.data
    })
  },
  middleware: {
    [NEW_COMPANY_REQUEST]: ({dispatch}) => next => action => {
      const result = next(action)

      if (!result.error) {
        dispatch(redirect('/dashboard'))
      }

      return result
    }
  }
}
