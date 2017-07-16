import {getState} from 'redux-localstore'
import {browserHistory} from 'react-router'

export default Component => {
  if (!getState().isLogged) {
    return browserHistory.push('/')
  }
  return Component
}
