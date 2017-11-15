import applists from '@/services/applist';

export default {
  fetchAppLists(context, channel) {
    context.commit('fetchingAppLists');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateAppLists', applists[channel]);
      context.commit('applistsFetched');
    }, 2000);
  },
};
