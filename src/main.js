import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import store from './store/index';
import router from './router';
import DarkMode from './mixins/DarkMode';

Vue.config.productionTip = false;
Vue.mixin(DarkMode);

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
