// Create a store and export default it.
// Store must have a reducer and a middleware.

import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducer';

// middleware to log actions to console, only if the action is not of type function
const logger = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      if (typeof action !== 'function') {
        console.log(action.type);
      }
      next(action);
    };
  };
};

// middleware to stop substraction.
const stopSubstract = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      // if the action is of type SUBSTRACT_COUNT, then don't dispatch the action, just return
      if (action.type === 'SUBSTRACT_COUNT') {
        return;
      }
      next(action);
    };
  };
};

// applying middleware to store
const store = createStore(appReducer, applyMiddleware(logger, stopSubstract));

export default store;
