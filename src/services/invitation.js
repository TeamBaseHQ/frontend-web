export default {

  all() {
    return {
      'amazon-a': {
        'kunalvarma05@gmail.com': false,
        'ronak@gmail.com': true,
        'dimpi_jio@gmail.com': false,
      },
    };
  },

  forTeam(team) {
    return this.all()[team];
  },

};
