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
    setTimeout(() => {
      context.commit('addThread', data);
      context.commit('threadCreated');
    }, 2000);
  },
};
