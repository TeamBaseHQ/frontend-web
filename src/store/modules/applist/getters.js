export default {
  allAppLists(state) {
    return state.applists;
  },
  applistsAreLoading(state) {
    return state.loading;
  },
  addingAppList(state) {
    return state.creatingAppList;
  },
};
