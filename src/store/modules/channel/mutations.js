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
};
