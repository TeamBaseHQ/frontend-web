import appList from '@/services/app-store/apps';

export default {
  fetchAppLists(context, category) {
    context.commit('fetchingAppLists');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateAppList', appList.allByCategory(category));
      context.commit('appListFetched');
    }, 2000);
  },
};
