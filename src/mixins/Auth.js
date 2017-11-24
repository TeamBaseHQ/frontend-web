import {mapGetters, mapActions} from 'vuex';
import Utils from '../lib/Utils';

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
    loadMedia(media, size) {
      return Utils.loadMedia(media, size);
    },
  },
};
