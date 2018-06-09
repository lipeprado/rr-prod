import initialState from '../initialState';
import * as types from './types';

export default (state = initialState.auth, action) => {
  switch (action.type) {
    case types.AUTH_REQUEST:
      return Object.assign({}, state, {
        isAuthenticating: true,
        isAuthenticated: false,
      });
    case types.AUTH_SUCCESS:
      return {
        isAuthenticated: Object.keys(action.user).length !== 0,
        auth_user: Object.assign({}, state.auth_user, action.user),
        isAuthenticating: false,
      };
    case types.AUTH_FAILED:
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: false,
      });
    default:
      return state;
  }
};
