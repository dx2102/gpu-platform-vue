
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// naive-ui css styles will be mounted under this meta tag
// In this way we are sure that naive-ui styles will be loaded after tailwind reset
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.mount('#app')

