import Vue from 'vue';
import App from './App.vue';

import router from './router'



import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import Sandbox from './components/Sandbox.vue';
import Home from './components/Home.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})