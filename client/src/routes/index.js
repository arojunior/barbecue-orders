import Layout from '../layouts'

import Dashboard from './Dashboard'
import Orders from './Orders'
import Login from './Login'

export default [
  {
    path: '/',
    component: Login
  },
  {
    path: '/dashboard',
    component: Layout,
    indexRoute: Dashboard,
    childRoutes: [Orders]
  }
]
