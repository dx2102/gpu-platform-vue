<script setup>
// a tailwind navbar


import { useRoute } from 'vue-router'
import { useMessage } from 'naive-ui'

let route = useRoute()
window.message = useMessage();
window.onerror = e => {
  message.error(JSON.stringify(e));
};


</script>

<template>
  <!-- another manual version -->
  <nav class="flex gap-4 p-3 text-lg border-b-2 border-primary/10"> 
    <div class="mr-3 font-bold">GPU Platform</div>
    <RouterLink to="/" :class="{'text-primary': route.path === '/'}" class="hover:text-primary" >
      Home
    </RouterLink>
    <RouterLink to="/create" :class="{'text-primary': route.path === '/create'}" class="hover:text-primary" >
      Create
    </RouterLink>
    <RouterLink to="/create" :class="{'text-primary': route.path === '/help'}" class="hover:text-primary" >
      Help
    </RouterLink>
    <div class="mx-auto"></div>
    <RouterLink to="/console/instance" :class="{'text-primary': route.matched[0]?.path === '/console'}" class="hover:text-primary" >
      Console
    </RouterLink>
    <RouterLink to="/account" :class="{'text-primary': ['account', 'login', 'signup'].includes(route.name)}" class="hover:text-primary" >
      Account
    </RouterLink>
  </nav>
</template>