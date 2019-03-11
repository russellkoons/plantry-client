import store from 'store';

// Some simple functions to access JWTs

export const loadToken = () => {
  return store.get('authToken');
};

export const saveToken = authToken => {
  try {
    store.set('authToken', authToken);
  } catch(e) {}
};

export const clearToken = authToken => {
  try {
    store.remove('authToken');
  } catch(e) {}
};