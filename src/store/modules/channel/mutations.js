export default {
  fetchingChannels(state) {
    state.loading = true;
  },
  populateChannels(state, channels) {
    state.channels = channels;
  },
  channelsFetched(state) {
    state.loading = false;
  },
  addChannel(state, data) {
    const newChannels = {...state.channels};
    newChannels[data.slug] = data.channel;
    state.channels = newChannels;
  },
  creatingChannel(state) {
    state.creatingChannel = true;
  },
  channelCreated(state) {
    state.creatingChannel = false;
  },
};
