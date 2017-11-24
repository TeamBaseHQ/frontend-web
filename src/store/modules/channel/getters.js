export default {
  allChannels(state) {
    return state.channels;
  },
  currentChannel(state, getters) {
    return channelSlug => getters.allChannels.filter(channel => channel.slug === channelSlug)[0];
  },
  isLoading(state) {
    return state.loading;
  },
  addingChannel(state) {
    return state.creatingChannel;
  },
};
