export default {
  allMessages(state) {
    return state.messages;
  },
  messagesAreLoading(state) {
    return state.loading;
  },
  addingMessage(state) {
    return state.creatingMessage;
  },
};
