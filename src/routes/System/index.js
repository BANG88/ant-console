module.exports = {
  path: 'system',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Profile'))
    })
  }
}
