import {handleAction} from 'redux-actions'

import {USER_ERROR} from './actions'

const initialState = {
  error: null
}

export default handleAction(
  USER_ERROR,
  (state, action) => ({
    ...state,
    error: action.payload.data.msg
  }),
  initialState
)
