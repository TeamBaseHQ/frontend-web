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
  createChannel(context, data) {
    context.commit('creatingChannel');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('addChannel', data);
      context.commit('channelCreated');
    }, 2000);
  },
};
