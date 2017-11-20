import Home from '../pages/Home';
import AppBase from '../pages/app/AppBase';
import AppMain from '../pages/app/AppMain';
import AccountSettings from '../pages/app/account-settings/AccountSettings';
import PersonalInfoAccountSettings from '../pages/app/account-settings/tabs/PersonalInfo';
import NotificationsAccountSettings from '../pages/app/account-settings/tabs/Notifications';
import TeamSettingsAccountSettings from '../pages/app/account-settings/tabs/TeamSettings';
import AppStore from '../pages/app-store/AppStore';
import AppList from '../pages/app-store/AppList';
import AppDetails from '../pages/app-store/AppDetails';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/app-store',
    name: 'app-store',
    component: AppStore,
    children: [
      {
        path: ':category',
        component: AppList,
        name: 'app-list',
      },
      {
        path: '/apps/:appSlug',
        component: AppDetails,
        name: 'app-store-details',
      }],

  },
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
        path: 'account-settings',
        component: AccountSettings,
        children: [
          {
            path: '/',
            name: 'account-settings',
            component: PersonalInfoAccountSettings,
          },
          {
            path: 'notifications',
            name: 'account-settings-notifications',
            component: NotificationsAccountSettings,
          },
          {
            path: 'teamsettings',
            name: 'account-settings-team-settings',
            component: TeamSettingsAccountSettings,
          },
        ],
      },
    ],
  },
];
