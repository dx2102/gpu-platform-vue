import { createRouter, createWebHistory } from 'vue-router'

// Home Market Console Account Login Signup

import Home from '@/views/Home.vue'
import Create from '@/views/Create.vue'
import Help from '@/views/Help.vue'
import Console from '@/views/Console.vue'
  import Instance from '@/views/Console/Instance.vue'
  import Image from '@/views/Console/Image.vue'
  import FileStore from '@/views/Console/FileStore.vue'
  import History from '@/views/Console/History.vue'
  import Balance from '@/views/Console/Balance.vue'
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
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/help',
      name: 'help',
      component: Help
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
        {
          path: 'history',
          name: 'history',
          component: History
        },
        {
          path: 'balance',
          name: 'balance',
          component: Balance
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
