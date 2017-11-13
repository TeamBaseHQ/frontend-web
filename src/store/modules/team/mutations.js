export default {
  fetchingTeams(state) {
    state.loading = true;
  },
  populateTeams(state, teams) {
    state.teams = teams;
  },
  teamsFetched(state) {
    state.loading = false;
  },
  addTeam(state, data) {
    const newTeams = {...state.teams};
    newTeams[data.slug] = data.team;
    state.teams = newTeams;
  },
  creatingTeam(state) {
    state.creatingTeam = true;
  },
  teamCreated(state) {
    state.creatingTeam = false;
  },
};
