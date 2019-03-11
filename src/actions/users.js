import {API_BASE_URL} from '../config';
import {normalizeErrors} from './utility';

// User Registration Actions

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const registerRequest = () => ({
  type: REGISTER_REQUEST
});

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const registerSuccess = () => ({
  type: REGISTER_SUCCESS
});

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const registerError = (error) => ({
  type: REGISTER_ERROR,
  error: error
});

export const registerUser = (username, password) => dispatch => {
  dispatch(registerRequest());
  return fetch(`${API_BASE_URL}users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  .then(res => normalizeErrors(res))
  .then(res => {
    dispatch(registerSuccess());
    return res.json();
  })
  .catch(err => {
    const {reason, message, location} = err;
    dispatch(registerError(message));
    if (reason === 'ValidationError') {
      return Promise.reject({
          [location]: message
        });
    }
  });
};