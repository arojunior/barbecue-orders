import Layout from '../layouts'

import Dashboard from './Dashboard'
import Orders from './Orders'
import Login from './Login'
import Companies, {OrdersByCompany} from './Companies'
import Users, {MyAccount} from './Users'

export default [
  Users,
  {
    path: '/',
    component: Login
  },
  {
    path: '/dashboard',
    component: Layout,
    indexRoute: Dashboard
  },
  {
    path: '/companies',
    component: Layout,
    indexRoute: Companies
  },
  {
    path: '/companies/:id/orders',
    component: Layout,
    indexRoute: OrdersByCompany
  },

  {
    path: '/users',
    component: Layout,
    indexRoute: MyAccount
  },
  {
    path: '/orders',
    component: Layout,
    indexRoute: Orders
  }
]
