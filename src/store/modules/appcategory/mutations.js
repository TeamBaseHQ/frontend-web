export default {
  fetchingAppCategories(state) {
    state.loading = true;
  },
  populateAppCategories(state, appCategories) {
    state.appCategories = appCategories;
  },
  appCategoriesFetched(state) {
    state.loading = false;
  },
  fetchingHandPickedCategories(state) {
    state.loading = true;
  },
  populateHandPickedCategories(state, handPickedCategories) {
    state.handPickedCategories = handPickedCategories;
  },
  handPickedCategoriesFetched(state) {
    state.loading = false;
  },
};
