/**
 * SunEee
 * @date Created on 11/12/15
 * @author YuHui(语晖)<yuhui@suneee.com>
 */

module.exports = {
    path: 'updatePassword',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/UpdatePassword'))
        })
    }
};
