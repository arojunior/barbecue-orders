import api from '../service'
import {createAction} from 'redux-actions'
import {isEmpty} from 'ramda'
import {resetLocalStore} from 'redux-localstore'
import {redirect} from '../Router'

export const LOGIN_REQUEST_API = 'modules/Login/REQUEST_API'
const LOGOUT = 'modules/Login/LOGOUT'

export const loginAction = createAction(LOGIN_REQUEST_API, values => {
  return api.post('/login', values)
})

export const logoutAction = createAction(LOGOUT)

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
    },

    [LOGOUT]: (state, action) => ({
      isLogged: false,
      user: {},
      error: null,
      order_items: [],
      company_orders: []
    })
  },

  middleware: {
    [LOGIN_REQUEST_API]: ({dispatch, getState}) => next => action => {
      const result = next(action)

      if (!result.error && !isEmpty(getState().user)) {
        dispatch(redirect('/dashboard'))
      }

      return result
    },

    [LOGOUT]: ({dispatch}) => next => action => {
      const result = next(action)
      resetLocalStore()
      dispatch(redirect('/'))

      return result
    }
  }
}
