export default {
  allByCategory(category) {
    return this.all()[category];
  },
  all() {
    return {
      featured: {
        github: {
          name: 'Github',
          image: 'https://logo.clearbit.com/github.com?s=128',
        },
      },
      popular: {
        facebook: {
          name: 'Facebook',
          image: 'https://logo.clearbit.com/facebook.com?s=128',
        },
        github: {
          name: 'Github',
          image: 'https://logo.clearbit.com/github.com?s=128',
        },
      },
      developer_tools: {
        github: {
          name: 'Github',
          image: 'https://logo.clearbit.com/github.com?s=128',
        },
      },
      productivity: {
        slack: {
          name: 'Slack',
          image: 'https://logo.clearbit.com/slack.com?s=128',
        },
      },
      fun: {
        giphy: {
          name: 'Giphy',
          image: 'https://logo.clearbit.com/giphy.com?s=128',
        },
      },
    };
  },
};
