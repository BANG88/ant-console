module.exports = {
    path: 'Promote',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Promote'))
        })
    }
};
