import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Create a store and export default it. Store must have a reducer and a middleware.
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
