import Home from '../../pages/Home';
import Login from '../../pages/Login';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      middlewares: ['no-auth'],
    },
  },
];
