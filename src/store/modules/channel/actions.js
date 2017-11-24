import BaseService from '../../../services/BaseService';

export default {
  fetchChannels(context, teamSlug) {
    context.commit('fetchingChannels');

    BaseService.base().channelService().getAllChannels(teamSlug).then((channels) => {
      context.commit('channelsFetched');
      context.commit('populateChannels', channels.getData());
    });
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
