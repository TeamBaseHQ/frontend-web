import BaseService from '../../../services/BaseService';

export default {
  fetchAllTeams(context) {
    context.commit('fetchingTeams');
    // Simulate/Fake server request-response delay
    BaseService.base().teamService().getAllTeams().then((teamCollection) => {
      context.commit('teamsFetched');
      context.commit('populateTeams', teamCollection.getData());
    });
  },
  fetchCurrentTeam(context, teamSlug) {
    context.commit('fetchingCurrentTeam');
    BaseService.base().teamService().getTeam(teamSlug)
      .then((team) => {
        context.commit('currentTeamFetched');
        context.commit('setCurrentTeam', team);
      });
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
