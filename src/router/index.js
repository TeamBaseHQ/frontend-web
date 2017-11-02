import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import AppBase from '../pages/app/AppBase';
import AppMain from '../pages/app/AppMain';

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
      }],
    },
  ],
});
