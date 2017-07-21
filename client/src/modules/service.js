import axios from 'axios'
import {getState} from 'redux-localstore'
import {isEmpty} from 'ramda'

const state = getState()

const token = () => (isEmpty(state) ? null : 'Bearer ' + state.user.token)

const service = axios.create({
  baseURL: 'http://localhost:8000'
})

service.defaults.headers.common['Authorization'] = token()

export default service
