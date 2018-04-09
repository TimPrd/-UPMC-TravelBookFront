import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Sandbox from '@/components/Sandbox'

Vue.use(Router)

export default new VueRouter({
      mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'Sandbox',
      component: Sandbox
    }
  ]
})
