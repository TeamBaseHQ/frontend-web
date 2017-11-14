import messages from '@/services/message';

export default {
  fetchMessages(context) {
    context.commit('fetchingMessages');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateMessages', messages.all());
      context.commit('messagesFetched');
    }, 2000);
  },
  createMessage(context, data) {
    context.commit('creatingMessage');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('addMessage', data);
      context.commit('messageCreated');
    }, 2000);
  },
};
