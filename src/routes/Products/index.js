module.exports = {
  path: 'products',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Products'))
    })
  }
}
