import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import index from './router';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'localhost:8080/';
Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router: index,
  render: h => h(App)
}).$mount('#app');
