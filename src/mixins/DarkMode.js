export default {
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
