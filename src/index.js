/* eslint-disable no-unused-vars */
import 'babel-core/polyfill';
import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

const middleware = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
const store = createStoreWithMiddleware(reducer)

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
  onEnter:function (nextState, replaceState) {
    console.log(nextState);
  },
  childRoutes: [ {
    path: '/',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/Products'),
      require('./routes/Calendar'),
      require('./routes/Course'),
      require('./routes/Grades'),
      require('./routes/Messages'),
      require('./routes/Profile')
    ]
  } ]
}

render( <Provider store={store}>
    <Router history={history} routes={rootRoute} />
      </Provider>,
  document.getElementById('root')
)
