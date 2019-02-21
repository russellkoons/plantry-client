import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import {loadToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(rootReducer, applyMiddleware(thunk));

const authToken = loadToken();

if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;