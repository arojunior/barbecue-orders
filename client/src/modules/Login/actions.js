import axios from 'axios'
import {createAction} from 'redux-actions'
import {browserHistory} from 'react-router'

export const LOGIN_SUCCESS = 'modules/Login/SUCCESS'

const loginSuccess = createAction(LOGIN_SUCCESS)

export const sendLogin = values => dispatch => {
  axios
    .post('/api/login', values)
    .then(user => dispatch(loginSuccess(user)))
    .then(() => browserHistory.push('/dashboard'))
}
