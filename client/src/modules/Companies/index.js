import api from '../service'
import {createAction} from 'redux-actions'
import {redirect} from '../Router'

export const NEW_COMPANY_REQUEST = 'modules/Companies/API_REQUEST_NEW'

export const companiesAction = createAction(NEW_COMPANY_REQUEST, values => {
  return api.post('/companies', values)
})

export default {
  reducer: {
    [NEW_COMPANY_REQUEST]: {
      throw: (state, action) => ({
        ...state,
        error: action.payload.response.data.msg
      })
    }
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
