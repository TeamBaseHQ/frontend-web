export default {
  fetchingInvitations(state) {
    state.loading = true;
  },
  populateInvitations(state, invitations) {
    state.invitations = invitations;
  },
  invitationsFetched(state) {
    state.loading = false;
  },
  addInvitation(state, email) {
    const newInvitations = {...state.invitations};
    newInvitations[email] = false;
    state.invitations = newInvitations;
  },
  sendingInvitation(state) {
    state.sendingInvitation = true;
  },
  invitationSent(state) {
    state.sendingInvitation = false;
  },
  cancelInvitation(state, email) {
    const newInvitations = {...state.invitations};
    delete newInvitations[email];
    state.invitations = newInvitations;
  },
};
