import axios from 'axios';
import { BASE_URL } from '../utils';

export const SET_AXIOS_DEFAULT = () => {
  axios.defaults.headers.common['Content-Type'] =
    'application/json; charset=utf-8';
};

export const SET_AUTH_TOKEN = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const CLEAR_AXIOS_DEFAULT = () => {
  axios.defaults.headers.common['Content-Type'] = '';
  axios.defaults.baseURL = '';
};

export const API = axios.create({
  baseURL: `${BASE_URL}`,
  crossDomain: true,
});
