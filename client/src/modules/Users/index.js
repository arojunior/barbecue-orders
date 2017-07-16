import {USER_ERROR} from './actions'

export default {
  reducer: {
    [USER_ERROR]: (state, action) => ({
      ...state,
      error: action.payload.data.msg
    })
  }
}
