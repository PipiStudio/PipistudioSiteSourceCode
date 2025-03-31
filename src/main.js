import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import { createWebHistory, createRouter } from 'vue-router'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/main.css'

import App from './App.vue'
import Home from './Home.vue'
import Projects from './Projects.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)
app.use(ElementPlus,{locale:zhCn,})
app.mount('#app')
