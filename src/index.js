import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import Counter from './components/counter';
import App from './components/app';
import Controls from './components/control';

// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know
const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App />
    <Counter />
    <Controls />
  </Provider>,
);
