import {mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      $currentUser: 'getCurrentUser',
      $accessToken: 'getAccessToken',
    }),
  },
  methods: {
    ...mapActions([
      'fetchCurrentUser',
    ]),
  },
};
