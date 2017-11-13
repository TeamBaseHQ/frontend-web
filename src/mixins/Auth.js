export default {
  methods: {
    $_setAccessToken(accessToken) {
      this.$localStorage.set('_token', JSON.stringify(accessToken));
    },
    $_getAccessToken() {
      return JSON.parse(this.$localStorage.get('_token'));
    },
    $_setCurrentUser(user) {
      this.$localStorage.set('_currentUser', JSON.stringify(user));
    },
    $_getCurrentUser() {
      return JSON.parse(this.$localStorage.get('_currentUser'));
    },
  },
};
