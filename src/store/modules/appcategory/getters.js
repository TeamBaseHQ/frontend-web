export default {
  allAppCategories(state) {
    return state.appCategories;
  },
  appCategoriesAreLoading(state) {
    return state.loading;
  },
  allHandPickedCategories(state) {
    return state.handPickedCategories;
  },
  handPickedCategoriesAreLoading(state) {
    return state.loadingHandPicked;
  },
};
