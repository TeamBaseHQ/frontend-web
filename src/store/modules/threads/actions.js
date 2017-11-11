import threads from '@/services/thread';

export default {
  fetchThreads(context) {
    context.commit('fetchingThreads');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateThreads', threads.all());
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
