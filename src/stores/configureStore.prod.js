import thunk from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import { routerMiddleware } from 'react-router-redux';

import { reducers } from './../reducers';

/**
 * Method to create stores based on a set of passed
 * reducers
 * @returns {*}
 */
export function configureStore(history, initialState = {}) {

  const middleware = routerMiddleware(history);

  const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunk, middleware)
  );

  return createStore(reducers, initialState, enhancer);
}
