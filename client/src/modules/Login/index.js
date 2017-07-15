import {handleAction} from 'redux-actions'
import {defineState} from 'redux-localstore'

import {LOGIN_SUCCESS} from './actions'

const defaultState = {
  data: null,
  isLogged: false
}

const initialState = defineState(defaultState)('Login')

export default handleAction(
  LOGIN_SUCCESS,
  (state, action) => ({
    ...state,
    data: action.payload.data,
    isLogged: true
  }),
  initialState
)
