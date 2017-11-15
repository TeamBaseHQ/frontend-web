export default {
  allAppCategories(state) {
    return state.appcategories;
  },
  appcategoriesAreLoading(state) {
    return state.loading;
  },
  addingAppCategories(state) {
    return state.creatingAppcategory;
  },
};
