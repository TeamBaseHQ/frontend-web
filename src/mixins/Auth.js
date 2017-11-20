import AuthService from '../lib/Auth';

export default {
  methods: {
    $_setAccessToken(accessToken) {
      AuthService.setAccessToken(accessToken);
    },
    $_getAccessToken() {
      return AuthService.getAccessToken();
    },
    $_setCurrentUser(user) {
      AuthService.setCurrentUser(user);
    },
    $_getCurrentUser() {
      return AuthService.getCurrentUser();
    },
  },
};
