import AppStore from '../../pages/app-store/AppStore';
import AppList from '../../pages/app-store/AppList';
import AppDetails from '../../pages/app-store/AppDetails';

export default [
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
];
