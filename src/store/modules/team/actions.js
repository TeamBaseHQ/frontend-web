import teams from '@/services/team';
import BaseService from '../../../services/BaseService';

export default {
  fetchTeams(context) {
    context.commit('fetchingTeams');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateTeams', teams.all());
      context.commit('teamsFetched');
    }, 2000);
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
