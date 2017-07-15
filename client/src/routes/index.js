import Layout from '../layouts'

import Home from './Home'
import About from './About/routes'
import Login from './Login'

export default [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: Layout,
    indexRoute: Home,
    childRoutes: [About]
  }
]
