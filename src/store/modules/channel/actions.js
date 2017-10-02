import channels from '@/services/channel';

export default {
  fetchChannels(context) {
    context.commit('fetchingChannels');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateChannels', channels.all());
      context.commit('channelsFetched');
    }, 2000);
  },
};
