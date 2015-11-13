module.exports = {
    path: 'user',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Profile'))
        })
    },

    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/UpdatePassword')
            ])
        })
    }
}
