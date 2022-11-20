import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducer';

const logger = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      console.log(action.type);
      next(action);
    };
  };
};

const store = createStore(appReducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
