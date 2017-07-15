import store from '../modules'
import {browserHistory} from 'react-router'

export default Component => {
  if (!store.getState().Login.isLogged) {
    return browserHistory.push('/')
  }
  return Component
}
