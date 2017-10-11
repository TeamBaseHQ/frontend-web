import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import store from './store/index';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
