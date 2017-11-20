import AccountSettings from '@/pages/app/account-settings/AccountSettings';
import TeamSettingsAccountSettings from '@/pages/app/account-settings/tabs/TeamSettings';
import PersonalInfoAccountSettings from '@/pages/app/account-settings/tabs/PersonalInfo';
import NotificationsAccountSettings from '@/pages/app/account-settings/tabs/Notifications';

export default [
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
];
