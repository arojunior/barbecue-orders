import axios from '../service'
import {createAction} from 'redux-actions'
import {browserHistory} from 'react-router'

export const LOGIN_SUCCESS = 'modules/Login/SUCCESS'
export const LOGIN_ERROR = 'modules/Login/ERROR'

const loginSuccess = createAction(LOGIN_SUCCESS)
const loginError = createAction(LOGIN_ERROR)

export const sendLogin = values => dispatch => {
  axios
    .post('/login', values)
    .then(user => dispatch(loginSuccess(user.data)))
    .then(() => browserHistory.push('/dashboard'))
    .catch(err => dispatch(loginError(err.response)))
}
