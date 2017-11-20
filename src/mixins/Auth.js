import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getCurrentUser: 'getCurrentUser',
      getAccessToken: 'getAccessToken',
    }),
  },
};
