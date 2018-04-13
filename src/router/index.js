import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sandbox from '@/components/Sandbox'

Vue.use(Router)

export default new Router({
      mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: Sandbox
    }
  ]
})
