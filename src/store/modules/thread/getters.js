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
};
