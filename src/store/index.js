import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
  state: {
    count: 0,
  },
  getters: {
    counter(state) {
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
  actions: {
    increaseCounter(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 1000);
    },
  },
});
