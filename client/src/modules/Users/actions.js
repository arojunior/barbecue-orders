import axios from '../service'
import {createAction} from 'redux-actions'
import {browserHistory} from 'react-router'

import {loginSuccess} from '../Login/actions'

export const USER_ERROR = 'modules/Users/ERROR'

const userError = createAction(USER_ERROR)

export const newUser = values => dispatch => {
  axios
    .post('/users', {email: values.email, password: values.password})
    .then(user => dispatch(loginSuccess(user.data)))
    .then(() => browserHistory.push('/dashboard'))
    .catch(err => dispatch(userError(err.response)))
}
