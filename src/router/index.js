import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import AppBase from '../pages/app/AppBase';
import AppMain from '../pages/app/AppMain';
import AccountSettings from '../pages/app/account-settings/AccountSettings';
import PersonalInfoAccountSettings from '../pages/app/account-settings/tabs/PersonalInfo';
import NotificationsAccountSettings from '../pages/app/account-settings/tabs/Notifications';

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
      path: '/app',
      component: AppBase,
      children: [{
        path: '/',
        name: 'app',
        component: AppMain,
      }, {
        path: 'account-settings',
        component: AccountSettings,
        children: [{
          path: '/',
          name: 'account-settings',
          component: PersonalInfoAccountSettings,
        }, {
          path: 'notifications',
          name: 'account-settings-notifications',
          component: NotificationsAccountSettings,
        }],
      },
      ],
    },
  ],
});
