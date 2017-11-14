export default {
  fetchingMessages(state) {
    state.loading = true;
  },
  populateMessages(state, messages) {
    state.messages = messages;
  },
  messagesFetched(state) {
    state.loading = false;
  },
  addMessage(state, data) {
    const newMessages = {...state.messages};
    newMessages[data.slug] = data.message;
    state.messages = newMessages;
  },
  creatingMessage(state) {
    state.creatingMessage = true;
  },
  messageCreated(state) {
    state.creatingMessage = false;
  },
};
