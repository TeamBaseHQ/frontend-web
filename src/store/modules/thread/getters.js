export default {
  allThreads(state) {
    return state.threads;
  },
  threadsAreLoading(state) {
    return state.loading;
  },
  creatingThread(state) {
    return state.creatingThread;
  },
  currentThread(state, getters) {
    return threadSlug => getters.allThreads.filter(thread => thread.slug === threadSlug)[0];
  },
};
