import BaseService from '../../../services/BaseService';

export default {
  fetchMessages(context, data) {
    context.commit('fetchingMessages');
    // Simulate/Fake server request-response delay
    const bs = BaseService.base();
    const ms = bs.messageService();

    ms.getAllMessages(data.team, data.channel, data.thread).then((messages) => {
      context.commit('populateMessages', messages.getData());
      context.commit('messagesFetched');
    });
  },
  createMessage(context, data) {
    context.commit('creatingMessage');
    const bs = BaseService.base();
    const ms = bs.messageService();
    ms.createMessage(data.team, data.channel, data.thread, data.content, data.type, [])
      .then((message) => {
        context.commit('addMessage', message);
        context.commit('messageCreated');
      });
  },
};
