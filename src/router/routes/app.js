import AppBase from '../../pages/app/AppBase';
import AppMain from '../../pages/app/AppMain';
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
      // Account Settings Routes
      ...accountSettingsRoutes,
    ],
  },
];
