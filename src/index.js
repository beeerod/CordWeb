import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  </BrowserRouter>
  , document.querySelector('.container'));
