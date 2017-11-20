import Auth from '../lib/Auth';
import AuthService from '../services/AuthService';

export default {
  toggleDarkMode(context) {
    context.commit('setDarkMode', !context.getters.isDarkMode);
  },

  fetchCurrentUser(context) {
    const currentUser = Auth.getCurrentUser();

    if (!currentUser) {
      context.commit('fetchingCurrentUser');

      return AuthService.getCurrentUser().then((user) => {
        context.commit('setCurrentUser', user);
        context.commit('currentUserFetched');
      });
    }

    return context.commit('setCurrentUser', currentUser);
  },
};
