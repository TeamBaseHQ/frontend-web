export default {
  increaseCounter(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 1000);
  },
};
