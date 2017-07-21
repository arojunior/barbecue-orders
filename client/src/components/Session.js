import {getState} from 'redux-localstore'
import {browserHistory} from 'react-router'

export default Component => {
  if (!getState().isLogged || !getState().user) {
    return browserHistory.push('/')
  }
  return Component
}
