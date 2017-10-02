const users = [
  {
    name: 'Kunal',
    verified: true,
  },
  {
    name: 'Karan',
    verified: true,
  },
  {
    name: 'Ashwin',
    verified: false,
  },
];

export default {
  getUsers(context) {
    setTimeout(() => {
      context.commit('fetchUsers', users);
    }, 1000);
  },

  addUser(context, data) {
    setTimeout(() => {
      context.commit('addUser', data);
    }, 1000);
  },
};
