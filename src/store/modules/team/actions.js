import teams from '@/services/team';

export default {
  fetchTeams(context) {
    context.commit('fetchingTeams');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateTeams', teams.all());
      context.commit('teamsFetched');
    }, 2000);
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
