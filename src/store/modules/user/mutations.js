export default {
  fetchUsers(state, users) {
    state.all = users;
  },

  addUser(state, data) {
    state.all.push({
      name: data.name,
      verified: data.verified,
    });
  },
};
