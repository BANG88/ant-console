import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router ,Route} from 'react-router';

import LoginStore from './stores/LoginStore';

const history = useBasename(createHistory)({
    // basename: '/console'
});

const rootRoute = {
    component: 'div',

    childRoutes: [
        {
            path: '/',
            /**
             * 授权相关
             * @param  {[type]} nextState    [description]
             * @param  {[type]} replaceState [description]
             * @return {[type]}              [description]
             */
            onEnter: (nextState, replaceState)=> {
                if (!LoginStore.isLoggedIn()) {
                    replaceState({nextPathname: nextState.location.pathname}, '/login')
                }
            },
            component: require('./routes/Dashboard/components/App'),
            childRoutes: [
                require('./routes/Product'),
                require('./routes/Order'),
                require('./routes/Promotion'),
                require('./routes/Member'),
                require('./routes/System')
            ]
        },
        // 登录
        require('./routes/Login'),
        // 404
        require('./routes/Notfound')
    ]

};

render(
    <Router history={history} routes={rootRoute}/>,
    document.getElementById('root')
);
