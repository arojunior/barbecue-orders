import api from '../service'
import {createAction} from 'redux-actions'
import {redirect} from '../Router'

const NEW_COMPANY_REQUEST = 'modules/Companies/API_REQUEST_NEW'
const COMPANY_ORDERS_REQUEST = 'modules/Companies/API_REQUEST_ORDERS'

export const companiesAction = createAction(NEW_COMPANY_REQUEST, values => {
  return api.post('/companies', values)
})

export const getCompaniesAndOrders = createAction(
  COMPANY_ORDERS_REQUEST,
  () => {
    return api.get('/companies/orders')
  }
)

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
