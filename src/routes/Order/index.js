/**
 * Created by bang on 11/15/15.
 */

module.exports = {
    path: 'order',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Order'))
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
