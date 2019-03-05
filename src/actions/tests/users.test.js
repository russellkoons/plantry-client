import {registerUser} from '../users';
import {API_BASE_URL} from '../../config';

describe('registerUser', () => {
  it('Should fetch a registered user', () => {
    const user = {
      username: 'fakeUser',
      password: 'password',
    };

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json() {
        return
      }
    }));

    const dispatch = jest.fn();

    return registerUser(user.username, user.password)(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
    });
  });
});