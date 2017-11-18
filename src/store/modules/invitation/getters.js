export default {
  allInvitations(state) {
    return state.invitations;
  },
  fetchingInvitations(state) {
    return state.loading;
  },
  sendingInvitation(state) {
    return state.sendingInvitation;
  },
};
