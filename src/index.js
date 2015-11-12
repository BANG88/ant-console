import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router ,Route} from 'react-router';

import AuthStore from './stores/AuthStore';

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
                if (!AuthStore.isLoggedIn()) {
                    replaceState({nextPathname: nextState.location.pathname}, '/login')
                }
            },
            component: require('./components/App'),
            childRoutes: [
                require('./routes/Products'),
                require('./routes/Calendar'),
                require('./routes/Course'),
                require('./routes/Grades'),
                require('./routes/Messages'),
                require('./routes/Profile')
            ]
        },
        // 登录
        {
            path: '/login',
            component: require('./routes/Member/components/Login')
        },
        // 404
        {
            path: '*',
            component: require('./components/NotFound')
        }
    ]

};

render(
    <Router history={history} routes={rootRoute}/>,
    document.getElementById('root')
);
