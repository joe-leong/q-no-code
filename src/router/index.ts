import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: () => import('@/views/DataSourceView.vue')
        },
        {
          path: 'layout',
          name: 'layout',
          component: () => import('@/views/PageLayoutView.vue')
        },
        {
          path: 'actions',
          name: 'actions',
          component: () => import('@/views/ActionsView.vue')
        }
      ]
    }
  ]
})

export default router
