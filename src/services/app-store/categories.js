export default {
  handPicked() {
    return {
      featured: {
        name: 'Featured',
        icon: 'star',
        Description: 'We’ve picked popular and useful apps to get you off to a running start. Connect your tools and services with Base so your team can stay coordinated, work faster, and keep conversations and context all in one place.',
      },
      popular: {
        name: 'Popular',
        icon: 'timeline',
        Description: 'Here you can find the most popular app.',
      },
    };
  },
  all() {
    return {
      productivity: {
        name: 'Productivity Tools',
        icon: 'work',
        Description: 'Optimize your workday: Get updates, make to-do lists, host standups, and more, right from Base.',
      },
      developer_tools: {
        name: 'Developer Tools',
        icon: 'computer',
        Description: 'Connect your development tools to Base and raise visibility into builds, errors, or anything else that needs your attention.',
      },
      fun: {
        name: 'Fun',
        icon: 'insert_emoticon',
        Description: 'Add social media to Base, organize the lunch order, or find a new way for team members to connect. Apps in this category bring human connection to the work day.',
      },
      social_media: {
        name: 'Social Media',
        icon: 'public',
        Description: 'Add social media to Base, organize the lunch order, or find a new way for team members to connect. Apps in this category bring human connection to the work day.',
      },
    };
  },
};
