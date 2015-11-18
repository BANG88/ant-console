/**
 * Created by bang on 11/15/15.
 */

module.exports = {
    path: '/products',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Product'))
        })
    },

    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                //require('./routes/xx')
            ])
        })
    }
}
