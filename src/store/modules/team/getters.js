export default {
  allTeams(state) {
    return state.teams;
  },
  teamsAreLoading(state) {
    return state.loading;
  },
  addingTeam(state) {
    return state.creatingTeam;
  },
  currentTeam(state) {
    return state.currentTeam;
  },
  currentTeamIsLoading(state) {
    return state.loadingCurrentTeam;
  },
};
