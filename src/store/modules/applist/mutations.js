export default {
  fetchingAppLists(state) {
    state.loading = true;
  },
  populateAppList(state, appList) {
    state.appList = appList;
  },
  appListFetched(state) {
    state.loading = false;
  },
};
