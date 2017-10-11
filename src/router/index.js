import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import AppBase from '../pages/app/AppBase';
import ChannelThreads from '../pages/app/ChannelThreads';

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
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/app',
      component: AppBase,
      children: [{
        path: '/',
        name: 'app',
        component: ChannelThreads,
      }],
    },
  ],
});
