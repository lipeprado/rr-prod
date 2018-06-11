import 'babel-polyfill';
import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { basename } from 'config';
import App from 'components/App';
import 'styles/global.sass';
import configureStore from './store/configureStore';

const store = configureStore();

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <Route component={App} />
    </BrowserRouter>
  </Provider>
);

const root = document.getElementById('app');
render(renderApp(), root);

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App');
    render(renderApp(), root);
  });
}
