export default {
  setAccessToken(accessToken) {
    window.localStorage.setItem('_token', JSON.stringify(accessToken));
  },
  getAccessToken() {
    return JSON.parse(window.localStorage.getItem('_token'));
  },
  setCurrentUser(user) {
    window.localStorage.setItem('_currentUser', JSON.stringify(user));
  },
  getCurrentUser() {
    return JSON.parse(window.localStorage.getItem('_currentUser'));
  },
  isAuthenticated() {
    return this.getAccessToken();
  },
};
