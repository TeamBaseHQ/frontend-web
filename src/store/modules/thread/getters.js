export default {
  allThreads(state) {
    return state.threads;
  },
  threadsAreLoading(state) {
    return state.loading;
  },
  addingThread(state) {
    return state.creatingThread;
  },
};
