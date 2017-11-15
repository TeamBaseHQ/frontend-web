export default {
  handPicked() {
    return {
      featured: {
        name: 'Featured',
        icon: 'star',
      },
      popular: {
        name: 'Popular',
        icon: 'timeline',
      },
    };
  },
  all() {
    return {
      productivity: {
        name: 'Productivity Tools',
        icon: 'work',
      },
      developer_tools: {
        name: 'Developer Tools',
        icon: 'computer',
      },
      fun: {
        name: 'Fun',
        icon: 'insert_emoticon',
      },
    };
  },
};
