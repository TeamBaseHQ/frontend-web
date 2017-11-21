export default {
  allByCategory(category) {
    return this.all()[category];
  },
  detailsApps(appSlug) {
    return this.allApps()[appSlug];
  },
  allApps() {
    return {
      github: {
        name: 'Github',
        image: 'https://logo.clearbit.com/github.com?s=128',
        description: 'Github Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      facebook: {
        name: 'Facebook',
        image: 'https://logo.clearbit.com/facebook.com?s=128',
        description: 'Facebook Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      slack: {
        name: 'Slack',
        image: 'https://logo.clearbit.com/slack.com?s=128',
        description: 'Slack Github Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      giphy: {
        name: 'Giphy',
        image: 'https://logo.clearbit.com/giphy.com?s=128',
        description: 'Giphy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    };
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
      social_media: {
        facebook: {
          name: 'Facebook',
          image: 'https://logo.clearbit.com/facebook.com?s=128',
        },
        twitter: {
          name: 'Twitter',
          image: 'https://logo.clearbit.com/twitter.com?s=128',
        },
        whatsapp: {
          name: 'Whatsapp',
          image: 'https://logo.clearbit.com/whatsapp.com?s=128',
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
        tictactoe: {
          name: 'Tic Tac Toe',
          image: 'https://logo.clearbit.com/tictactoe.cat?s=128',
        },
      },
    };
  },
};
