import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import { DiagnosticCategory } from 'typescript'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path: 'category',
          component: Category

        }

      ]
    },
    {
      path: '/Login',
      component:Login
    }


  ]
  
})

export default router