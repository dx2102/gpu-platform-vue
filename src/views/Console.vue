<template>
  <div class="flex h-full">
    <div class="min-w-64 border-r-2 pr-1 border-primary/10">
      <n-menu :options="menuOptions" :value="route.matched[1]?.path" />
    </div>
    <div class="overflow-x-auto">
      <RouterView></RouterView>
    </div>
  </div>

</template>

<script setup>
import { h } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()

import { NIcon } from 'naive-ui'
import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon,
  BookOutline as BookIcon,
} from '@vicons/ionicons5'
function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () => h(RouterLink, {to: {path: '/console/instance'}}, { default: () => 'Container instances' }),
    key: '/console/instance',
    icon: renderIcon(BookIcon)
  },
  {
    label: () => h(RouterLink, {to: {path: '/console/image'}}, { default: () => 'Images' }),
    key: '/console/image',
    icon: renderIcon(BookIcon)
  },
  {
    label: () => h(RouterLink, {to: {path: '/console/file-store'}}, { default: () => 'File store' }),
    key: '/console/file-store',
    icon: renderIcon(BookIcon)
  },
  {
    label: () => h(RouterLink, {to: {path: '/console/history'}}, { default: () => 'History' }),
    key: '/console/history',
    icon: renderIcon(BookIcon)
  }
]
</script>