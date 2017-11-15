import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import AppBase from '../pages/app/AppBase';
import AppMain from '../pages/app/AppMain';
import AccountSettings from '../pages/app/account-settings/AccountSettings';
import PersonalInfoAccountSettings from '../pages/app/account-settings/tabs/PersonalInfo';
import NotificationsAccountSettings from '../pages/app/account-settings/tabs/Notifications';
import TeamSettingsAccountSettings from '../pages/app/account-settings/tabs/TeamSettings';
import AppStore from '../pages/app-store/AppStore';
import AppList from '../pages/app-store/AppList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
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
        }],

    },
    {
      path: '/app',
      component: AppBase,
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
  ],
});
