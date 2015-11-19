/**
 * Created by bang on 11/15/15.
 */

module.exports = {
    path: '*',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Notfound'))
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
