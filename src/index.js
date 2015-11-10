/* eslint-disable no-unused-vars */
import 'babel-core/polyfill';
import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router } from 'react-router'
import {redirectToLogin} from './actions/auth'

const history = useBasename(createHistory)({
  // basename: '/console'
})

const rootRoute = {
  component: 'div',
  /**
   * 授权相关
   * @param  {[type]} nextState    [description]
   * @param  {[type]} replaceState [description]
   * @return {[type]}              [description]
   */
  onEnter: redirectToLogin,
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Products'),
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Grades'),
      require('./routes/Messages'),
      require('./routes/Profile'),
			require('./routes/Member')

    ]
  } ]
}

render(<Router history={history} routes={rootRoute} />,
  document.getElementById('root')
)
