import 'babel-polyfill';
import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { basename } from 'config';
import App from 'components/App';
import configureStore from 'store/configureStore';
import 'styles/global.sass';

const store = configureStore();

const renderApp = () => (
  <BrowserRouter basename={basename}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>
);

const root = document.getElementById('app');
render(renderApp(), root);

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App');
    render(renderApp(), root);
  });
}
