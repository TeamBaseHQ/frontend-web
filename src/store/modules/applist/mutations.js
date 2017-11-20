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
  fetchingAppDetails(state) {
    state.loadingCurrentApp = true;
  },
  appDetailsFetched(state) {
    state.loadingCurrentApp = false;
  },
  setCurrentApp(state, appDetails) {
    state.currentApp = appDetails;
  },
};
