export default {
  setDarkMode(state, val) {
    state.darkMode = val;
  },
  setAccessToken(state, token) {
    state.accessToken = token;
  },
  setCurrentUser(state, user) {
    state.currentUser = user;
  },
  fetchingCurrentUser(state) {
    state.fetchingCurrentUser = true;
  },
  currentUserFetched(state) {
    state.fetchingCurrentUser = false;
  },
};
