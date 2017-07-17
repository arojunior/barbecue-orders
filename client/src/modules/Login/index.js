import api from '../service'
import {createAction} from 'redux-actions'
import {redirect} from '../Router'

export const LOGIN_REQUEST_API = 'modules/Login/REQUEST_API'

export const loginAction = createAction(LOGIN_REQUEST_API, values => {
  return api.post('/login', values)
})

export default {
  reducer: {
    [LOGIN_REQUEST_API]: {
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
    [LOGIN_REQUEST_API]: ({dispatch}) => next => action => {
      const result = next(action)

      if (!result.error) {
        dispatch(redirect('/dashboard'))
      }

      return result
    }
  }
}
