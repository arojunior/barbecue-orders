import Layout from '../layouts'

import Dashboard from './Dashboard'
import Orders from './Orders'
import Login from './Login'
import UsersAdd from './Users/Add'

export default [
  {
    path: '/',
    component: Login
  },
  {
    path: '/users/new',
    component: UsersAdd
  },
  {
    path: '/dashboard',
    component: Layout,
    indexRoute: Dashboard,
    childRoutes: [Orders]
  }
]
