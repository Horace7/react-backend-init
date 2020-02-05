/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux'
// react-redux-router 有bug而且好像不再维护了， 这里用connected-react-router
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'

import rootReducer from './reducer'

export default function configureStore(initialState, history, onComplete) {
  let finalCreateStore
  let devEnhancer

  const middleware = [routerMiddleware(history), thunkMiddleware, promiseMiddleware]
  if (process.env.NODE_ENV === 'production') {
    finalCreateStore = applyMiddleware(...middleware)(createStore)
  } else {
    // const devTools = require('remote-redux-devtools');
    // const { createLogger } = require('redux-logger')
    // const loggerMiddleware = createLogger({ duration: true })
    finalCreateStore = compose(
      applyMiddleware(...middleware),
    )(createStore)

    devEnhancer = window.devToolsExtension && window.devToolsExtension()
  }

  const store = finalCreateStore(rootReducer(history), initialState, devEnhancer)
  onComplete && onComplete()

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  // if (module.hot) {
  //   module.hot.accept('../reducers', () =>
  //     store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
  //   );
  // }

  return store
}
