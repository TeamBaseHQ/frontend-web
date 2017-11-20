import BaseService from '../services/BaseService';
import Auth from '../lib/Auth';

export default {
  toggleDarkMode(context) {
    context.commit('setDarkMode', !context.getters.isDarkMode);
  },

  fetchCurrentUser(context) {
    const currentUser = Auth.getCurrentUser();

    if (!currentUser) {
      context.commit('fetchingCurrentUser');
      return BaseService.base()
        .userService()
        .getCurrentUser()
        .then((user) => {
          context.commit('setCurrentUser', user);
          context.commit('currentUserFetched');
        });
    }

    return context.commit('setCurrentUser', currentUser);
  },
};
