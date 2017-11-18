import invitations from '@/services/invitation';

export default {
  fetchInvitations(context, team) {
    context.commit('fetchingInvitations');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('populateInvitations', invitations.forTeam(team));
      context.commit('invitationsFetched');
    }, 2000);
  },
  sendInvitation(context, email) {
    context.commit('sendingInvitation');
    // Simulate/Fake server request-response delay
    setTimeout(() => {
      context.commit('addInvitation', email);
      context.commit('invitationSent');
    }, 2000);
  },
  cancelInvitation(context, email) {
    context.commit('cancelInvitation', email);
  },
};
