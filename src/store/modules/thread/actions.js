import BaseService from '../../../services/BaseService';

export default {
  fetchThreads(context, data) {
    context.commit('fetchingThreads');

    BaseService.base().threadService().getAllThreads(data.team, data.channel).then((threads) => {
      context.commit('populateThreads', threads.getData());
      context.commit('threadsFetched');
    });
  },
  createThread(context, data) {
    context.commit('creatingThread');
    // Simulate/Fake server request-response delay
    const ts = BaseService.base().threadService();
    return ts.createThread(data.team, data.channel, data.subject, data.description)
      .then((thread) => {
        context.commit('addThread', thread);
        context.commit('threadCreated');
        return thread;
      });
  },
};
