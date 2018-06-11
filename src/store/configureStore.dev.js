import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import appReducer from '../reducers';

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line
  return createStore(
    appReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, logger, reduxImmutableStateInvariant()),
    ),
  );
}
