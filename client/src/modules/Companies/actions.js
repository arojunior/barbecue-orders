import axios from '../service'
import {browserHistory} from 'react-router'

export const newCompany = values =>
  axios.post('/companies', values).then(() => browserHistory.push('/dashboard'))
