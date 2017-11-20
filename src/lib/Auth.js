import {Auth as Authentication, Models} from 'base-javascript-sdk';

export default {
  isAuthenticated() {
    return this.getAccessToken();
  },
  setAccessToken(accessToken) {
    window.localStorage.setItem('_token', JSON.stringify(accessToken));
  },
  getAccessToken() {
    const token = JSON.parse(window.localStorage.getItem('_token'));

    if (!token) {
      return false;
    }
    return new Authentication.AccessToken(
      token.access_token, token.expires_in, token.refresh_token,
    );
  },
  clearAccessToken() {
    window.localStorage.removeItem('_token');
  },
  setCurrentUser(user) {
    window.localStorage.setItem('_currentUser', JSON.stringify(user));
  },
  getCurrentUser() {
    const data = JSON.parse(window.localStorage.getItem('_currentUser'));

    if (!data) {
      return false;
    }

    return new Models.User(data);
  },
  clearCurrentUser() {
    window.localStorage.removeItem('_currentUser');
  },
};
