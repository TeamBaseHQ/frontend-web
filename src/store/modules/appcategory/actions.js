import appcategories from '@/services/app-store/categories';

export default {
  fetchAppCategories(context) {
    context.commit('fetchingAppCategories');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateAppCategories', appcategories.all());
      context.commit('appCategoriesFetched');
    }, 2000);
  },
  fetchHandPickedCategories(context) {
    context.commit('fetchingHandPickedCategories');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateHandPickedCategories', appcategories.handPicked());
      context.commit('handPickedCategoriesFetched');
    }, 2000);
  },

};
