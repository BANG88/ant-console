/**
 * Created by bang on 11/15/15.
 */

module.exports = {
    path: ':id',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Detail'))
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
