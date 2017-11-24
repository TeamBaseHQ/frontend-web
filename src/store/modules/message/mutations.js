export default {
  fetchingMessages(state) {
    state.loading = true;
  },
  populateMessages(state, messages) {
    state.messages = messages.reverse();
  },
  messagesFetched(state) {
    state.loading = false;
  },
  addMessage(state, data) {
    const newMessages = state.messages;
    newMessages.push(data);
    state.messages = newMessages;
  },
  creatingMessage(state) {
    state.creatingMessage = true;
  },
  messageCreated(state) {
    state.creatingMessage = false;
  },
};
