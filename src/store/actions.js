export default {
  increaseCounter(context) {
    setTimeout(() => {
      context.commit('increment', {
        a: 4,
      });
    }, 1000);
  },
};
