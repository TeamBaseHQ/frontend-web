export default {
  appList(state) {
    return state.appList;
  },
  appListIsLoading(state) {
    return state.loading;
  },
  addingAppList(state) {
    return state.creatingAppList;
  },
  currentApp(state) {
    return state.currentApp;
  },
};
