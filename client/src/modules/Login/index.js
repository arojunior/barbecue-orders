import {handleActions} from 'redux-actions'
import {defineState} from 'redux-localstore'

import {LOGIN_SUCCESS, LOGIN_ERROR} from './actions'

const defaultState = {
  data: null,
  isLogged: false,
  error: null
}

const initialState = defineState(defaultState)('Login')

export default handleActions(
  {
    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload.data,
      error: null,
      isLogged: true
    }),
    [LOGIN_ERROR]: (state, action) => ({
      ...state,
      error: action.payload.data.msg
    })
  },
  initialState
)
