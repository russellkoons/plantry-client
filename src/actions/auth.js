import jwtDecode from 'jwt-decode';
import {API_BASE_URL} from '../config';
import {saveToken, clearToken} from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
  type: AUTH_ERROR,
  error
});

const storeAuthInfo = (authToken, dispatch) => {
  const decoded = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decoded.username));
  saveToken(authToken);
};

export const login = (username, password) => dispatch => {
  dispatch(authRequest());
  return(
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => res.json())
    .then(({authToken}) => {
      storeAuthInfo(authToken, dispatch);
    })
    .catch(e => {
      const {code} = e;
      const message = 
        code === 401 ? 'Incorrect username or password' : 'Unable to login, please trya again';
      dispatch(authError(e));
    });
  );
};

export const refeshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(e => {
      dispatch(authError(e));
      dispatch(clearAuth());
      clearToken(authToken);
    });
};