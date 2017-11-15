export default {
  fetchingAppCategories(state) {
    state.loading = true;
  },
  populateAppCategories(state, appcategories) {
    state.appcategories = appcategories;
  },
  appcategoriesFetched(state) {
    state.loading = false;
  },
};
