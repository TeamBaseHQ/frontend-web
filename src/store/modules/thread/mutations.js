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
  addThread(state, data) {
    const newthreads = {...state.threads};
    newthreads[data.slug] = data.thread;
    state.threads = newthreads;
  },
  creatingThread(state) {
    state.creatingThread = true;
  },
  threadCreated(state) {
    state.creatingThread = false;
  },
};
