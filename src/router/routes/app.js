import AppBase from '../../pages/app/AppBase';
import AppMain from '../../pages/app/AppMain';
import TeamBase from '../../pages/app/team/TeamBase';
import TeamMain from '../../pages/app/team/TeamMain';
import accountSettingsRoutes from './account-settings';

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
            name: 'team-base',
            component: TeamMain,
          },
        ],
      },
      // Account Settings Routes
      ...accountSettingsRoutes,
    ],
  },
];
