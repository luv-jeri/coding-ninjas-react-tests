import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import countReducer from './reducer';
const store = createStore(countReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Create a store and pass it to the Provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
