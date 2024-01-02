import { createRouter, createWebHistory } from 'vue-router'

// Home Market Console Account Login Signup

import Home from '@/views/Home.vue'
import Market from '@/views/Market.vue'
import Console from '@/views/Console.vue'
  import Instance from '@/views/Console/Instance.vue'
  import FileStore from '@/views/Console/FileStore.vue'
  import Image from '@/views/Console/Image.vue'
import Account from '@/views/Account.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/market',
      name: 'market',
      component: Market
    },
    {
      path: '/console',
      name: 'console',
      component: Console,
      children: [
        {
          path: 'instance',
          name: 'instance',
          component: Instance
        },
        {
          path: 'file-store',
          name: 'file-store',
          component: FileStore
        },
        {
          path: 'image',
          name: 'image',
          component: Image
        },
      ]
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
  ]
})

export default router
