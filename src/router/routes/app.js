import AppBase from '../../pages/app/AppBase';
import AppMain from '../../pages/app/AppMain';
import TeamBase from '../../pages/app/team/TeamBase';
import TeamMain from '../../pages/app/team/TeamMain';
import TeamChannel from '../../pages/app/team/TeamChannel';
import ChannelThreads from '../../pages/app/team/ChannelThreads';
import accountSettingsRoutes from './account-settings';
import ThreadMessages from '../../pages/app/team/ThreadMessages';

export default [
  {
    path: '/app',
    component: AppBase,
    meta: {
      middlewares: ['auth'],
    },
    children: [
      {
        path: '/',
        name: 'app',
        component: AppMain,
      },
      {
        path: ':teamSlug',
        component: TeamBase,
        children: [
          {
            path: '/',
            name: 'team-dashboard',
            component: TeamMain,
          },
          {
            path: ':channelSlug',
            component: TeamChannel,
            children: [
              {
                path: '/',
                name: 'channel-threads',
                component: ChannelThreads,
                children: [
                  {
                    path: ':threadSlug',
                    name: 'thread-messages',
                    component: ThreadMessages,
                  },
                ],
              },
            ],
          },
        ],
      },
      // Account Settings Routes
      ...accountSettingsRoutes,
    ],
  },
];
