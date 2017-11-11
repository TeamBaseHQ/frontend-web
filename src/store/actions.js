export default {
  toggleDarkMode(context) {
    context.commit('setDarkMode', !context.getters.isDarkMode);
  },
};
