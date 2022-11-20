import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createStore } from 'redux';
import appReducer from './reducer';

const store = createStore(appReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

