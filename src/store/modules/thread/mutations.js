export default {
  fetchingThreads(state) {
    state.loading = true;
  },
  populateThreads(state, threads) {
    state.threads = threads;
  },
  threadsFetched(state) {
    state.loading = false;
  },
  addThread(state, thread) {
    const threads = state.threads;
    threads.unshift(thread);
    state.threads = threads;
  },
  creatingThread(state) {
    state.creatingThread = true;
  },
  threadCreated(state) {
    state.creatingThread = false;
  },
};
