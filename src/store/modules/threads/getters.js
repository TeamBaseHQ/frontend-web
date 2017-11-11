export default {
  allThreads(state) {
    return state.threads;
  },
  isLoading(state) {
    return state.loading;
  },
  addingThread(state) {
    return state.creatingThread;
  },
};
