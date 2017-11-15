export default {
  fetchingAppLists(state) {
    state.loading = true;
  },
  populateAppLists(state, applists) {
    state.applists = applists;
  },
  applistsFetched(state) {
    state.loading = false;
  },
};
