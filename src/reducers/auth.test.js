import {authReducer} from './auth';
import * as actions from '../actions/auth';

describe('authReducer', () => {
  const testAuthToken = 'fakeAuthToken123';
  const testUser = {
    username: 'fakeUser'
  };
  const testError = 'test error';

  it('Should set the initial state when nothing is passed in', () => {
    const state = authReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      authToken: null,
      user: null,
      error: null
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = authReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toEqual(currentState);
  });

  describe('setAuthToken', () => {
    it('Should set the auth token', () => {
      let state = {
        authToken: null
      };
      state = authReducer(state, actions.setAuthToken(testAuthToken));
      expect(state).toEqual({
        authToken: testAuthToken
      });
    });
  });

  describe('clearAuth', () => {
    it('Should remove the auth token', () => {
      let state = {
        authToken: testAuthToken,
        user: testUser
      };
      state = authReducer(state, actions.clearAuth());
      expect(state).toEqual({
        authToken: null,
        user: null
      });
    });
  });

  describe('authRequest', () => {
    it('Should set loading to true', () => {
      let state = {
        error: testError
      };
      state = authReducer(state, actions.authRequest());
      expect(state).toEqual({
        error: null
      });
    });
  });

  describe('authSuccess', () => {
    it('Should set the user', () => {
      let state = {
        user: null
      };
      state = authReducer(state, actions.authSuccess(testUser));
      expect(state).toEqual({
        user: testUser
      });
    });
  });

  describe('authError', () => {
    it('Should set the error', () => {
      let state = {
        error: null
      };
      state = authReducer(state, actions.authError(testError));
      expect(state).toEqual({
        error: testError
      });
    });
  });
});