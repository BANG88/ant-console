/**
 * Created by bang on 11/15/15.
 */

module.exports = {
    path: '/login',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Login'))
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
