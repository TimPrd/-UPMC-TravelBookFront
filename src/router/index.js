import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sandbox from '@/components/Sandbox'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
      mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    /* SANDBOX */
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: Sandbox
    },
    /* END SANDBOX */
    
    /* USER */
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    
  ]
})
