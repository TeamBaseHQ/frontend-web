export default {
  setAccessToken(accessToken) {
    window.localStorage.set('_token', JSON.stringify(accessToken));
  },
  getAccessToken() {
    return JSON.parse(window.localStorage.get('_token'));
  },
  setCurrentUser(user) {
    window.localStorage.set('_currentUser', JSON.stringify(user));
  },
  getCurrentUser() {
    return JSON.parse(window.localStorage.get('_currentUser'));
  },
  isAuthenticated() {
    return this.getAccessToken() && this.getCurrentUser();
  },
};
