/**
 * Created by bang on 11/15/15.
 */

module.exports = {
    path: 'edit/:id',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Edit'))
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
