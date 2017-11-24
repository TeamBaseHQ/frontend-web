/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuetify from 'vuetify';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import VeeValidate from 'vee-validate';
import App from './App';
import store from './store/index';
import router from './router';
import Auth from './mixins/Auth';
import DarkMode from './mixins/DarkMode';

Vue.config.productionTip = false;
Vue.use(Vuetify);

const validatorConfig = {
  classes: true,
};

Vue.use(VeeValidate, validatorConfig);
Vue.mixin(Auth);
Vue.mixin(DarkMode);

window.socket = new Pusher('a5fd65ffaebfdc49e7ef', {
  cluster: 'ap2',
  encrypted: true,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
