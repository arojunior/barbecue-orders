import {browserHistory} from 'react-router'
import {createAction} from 'redux-actions'

const PUSH = 'modules/Router/PUSH'

export const redirect = createAction(PUSH)

export default {
  reducer: {
    [PUSH]: (state, action) => ({
      ...state,
      route: action.payload
    })
  },
  middleware: {
    [PUSH]: store => next => action => {
      browserHistory.push(action.payload)
      return next(action)
    }
  }
}
