export default {
  allChannels(state) {
    return state.channels;
  },
  isLoading(state) {
    return state.loading;
  },
  addingChannel(state) {
    return state.creatingChannel;
  },
};
