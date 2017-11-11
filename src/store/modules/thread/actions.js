import threads from '@/services/thread';

export default {
  fetchThreads(context, channel) {
    context.commit('fetchingThreads');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateThreads', threads[channel]);
      context.commit('threadsFetched');
    }, 2000);
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
