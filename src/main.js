import Vue from 'vue';
import Vuetify from 'vuetify';
import VueLocalStorage from 'vue-localstorage';
import App from './App';
import store from './store/index';
import router from './router';
import Auth from './mixins/Auth';
import DarkMode from './mixins/DarkMode';
import LocalStorage from './mixins/LocalStorage';

Vue.config.productionTip = false;

Vue.use(VueLocalStorage);
Vue.use(Vuetify);

Vue.use(LocalStorage);
Vue.mixin(Auth);
Vue.mixin(DarkMode);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
