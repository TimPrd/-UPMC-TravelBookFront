import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import Sandbox from './components/Sandbox.vue';
import Home from './components/Home.vue';
const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'sandbox',
    path: '/sandbox',
    component: Sandbox
  }
];
const router = new VueRouter({ mode: 'history', routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
