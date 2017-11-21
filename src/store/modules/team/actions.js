import BaseService from '@/services/BaseService';

export default {
  fetchTeams(context) {
    context.commit('fetchingTeams');
    // Simulate/Fake server request-response delay
    BaseService.base.getAllTeams().then((teamCollection) => {
      context.commit('populateTeams', teamCollection.getData());
    });
    context.commit('teamsFetched');
  },
  createTeam(context, data) {
    context.commit('creatingTeam');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('addTeam', data);
      context.commit('teamCreated');
    }, 2000);
  },
};
