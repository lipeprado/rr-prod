import jwtDecode from 'jwt-decode';
import * as types from './types';
import { API, TOKEN_NAME, SET_AUTH_TOKEN } from '../../utils';

export const authRequest = () => {
  return { type: types.AUTH_REQUEST };
};

export const onValidAuth = (user) => {
  return { type: types.AUTH_SUCCESS, user };
};

export const authFailed = () => {
  return { type: types.AUTH_FAILED };
};

const authUser = (res, dispatch) => {
  const { token } = res.data;
  localStorage.setItem(TOKEN_NAME, token);
  SET_AUTH_TOKEN(token);
  dispatch(onValidAuth(jwtDecode(token)));
};

export const login = (user) => {
  return async (dispatch) => {
    try {
      dispatch(authRequest());
      const response = await API.post('login/', {
        username: user.username,
        password: user.password,
      });
      authUser(response, dispatch);
      return response.data.token;
    } catch (error) {
      dispatch(authFailed());
      throw error;
    }
  };
};

export const noToken = () => {
  return { type: types.NO_TOKEN };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(noToken());
    localStorage.removeItem(TOKEN_NAME);
    SET_AUTH_TOKEN(false);
  };
};
