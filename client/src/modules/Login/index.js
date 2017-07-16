import {LOGIN_SUCCESS, LOGIN_ERROR} from './actions'

export default {
  reducer: {
    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      user: action.payload.data,
      error: null,
      isLogged: true
    }),
    [LOGIN_ERROR]: (state, action) => ({
      ...state,
      error: action.payload.data.msg
    })
  }
}
