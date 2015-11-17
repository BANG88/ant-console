/**
 * Created by bang on 11/15/15.
 */

module.exports = {
    path: 'promotion',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Promotion'))
        })
    },

    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                //require('./routes/xx')
            ])
        })
    }
};
