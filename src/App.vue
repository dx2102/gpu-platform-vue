<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'

import { NThemeEditor } from 'naive-ui'
import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'


const theme = {
  "common": {
    "borderRadius": "0.375rem",
    "fontSize": "1rem",
    "fontSizeTiny": "0.875rem",
    "fontSizeSmall": "1rem",
    "fontSizeMedium": "1rem",
    "fontSizeLarge": "1.125rem",
    "borderRadiusSmall": "0.375rem",
    "scrollbarWidth": "0.375rem",
    "primaryColor": "#18a058",
    "heightMedium": "2.375rem",
    "fontSizeMini": "0.875rem",
    "fontSizeHuge": "1.25rem",
    "cubicBezierEaseInOut": "cubic-bezier(0,.87,.12,1)",
    "cubicBezierEaseOut": "cubic-bezier(0,.87,.12,1)",
    "cubicBezierEaseIn": "cubic-bezier(0,.87,.12,1)"
  },
  "Button": {
    "waveOpacity": "0"
  },
  "Form": {
    "labelFontSizeLeftMedium": "1rem",
    "labelFontSizeTopMedium": "1rem",
    "labelFontSizeTopLarge": "1.125rem"
  }
}





</script>

<template>
  <NConfigProvider class="text-base" :theme-overrides="theme" :locale="enUS" :date-locale="dateEnUS">
    <NThemeEditor>
      <NMessageProvider>
        <div class="flex flex-col h-screen">
          <NavBar />
          <RouterView />
        </div>
      </NMessageProvider>
    </NThemeEditor>
  </NConfigProvider>
</template>
