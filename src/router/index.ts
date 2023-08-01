import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/edit'
    },
    {
      path: '/edit',
      name: 'home',
      component: Layout,
      redirect: '/edit/layout',
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: () => import('@/views/DataSourceView.vue'),
          children: [
            {
              path: ':id',
              component: () => import('@/views/DataSourceContent/DataSourceContent.vue')
            },
            {
              path: '',
              redirect: 'dataSource/1'
            }
          ]
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
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('@/views/RunnerView.vue')
    }
  ]
})

export default router
