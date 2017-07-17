export default {
  path: '/users/new',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./Add').default)
    })
  }
}

export const MyAccount = {
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./MyAccount').default)
    })
  }
}
