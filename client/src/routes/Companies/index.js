export default {
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require('./Add').default)
    })
  }
}
