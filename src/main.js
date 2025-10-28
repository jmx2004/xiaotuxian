import { createApp } from 'vue'

import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

// 引入懒加载指令插件并且注册
import {lazyPlugin } from '@/directives'

const app = createApp(App)
const pinia = createPinia()
app.use(router)    
app.use(pinia)
app.use(lazyPlugin)
app.mount('#app')


