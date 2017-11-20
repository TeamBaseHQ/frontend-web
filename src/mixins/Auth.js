import {mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      getCurrentUser: 'getCurrentUser',
      getAccessToken: 'getAccessToken',
    }),
  },
  methods: {
    ...mapActions([
      'fetchCurrentUser',
    ]),
  },
};
