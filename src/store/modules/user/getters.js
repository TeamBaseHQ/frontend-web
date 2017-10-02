export default {
  verifiedUsers(state) {
    return state.all.filter(user => user.verified);
  },
};
