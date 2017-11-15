import appcategories from '@/services/appcategory';

export default {
  fetchAppCategories(context) {
    context.commit('fetchingAppCategories');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateAppCategories', appcategories.all());
      context.commit('appcategoriesFetched');
    }, 2000);
  },

};
