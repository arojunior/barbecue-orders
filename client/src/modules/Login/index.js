import api from '../service'
import {createAction} from 'redux-actions'
import {redirect} from '../Router'

const REQUEST_API = 'modules/Login/REQUEST_API'

export const loginAction = createAction(REQUEST_API, values => {
  return api.post('/login', values)
})

export default {
  reducer: {
    [REQUEST_API]: {
      next: (state, action) => ({
        ...state,
        user: action.payload.data,
        error: null,
        isLogged: true
      }),
      throw: (state, action) => ({
        ...state,
        error: action.payload.response.data.msg
      })
    }
  },
  middleware: {
    [REQUEST_API]: ({dispatch}) => next => action => {
      const result = next(action)

      if (!result.error) {
        dispatch(redirect('/dashboard'))
      }

      return result
    }
  }
}
