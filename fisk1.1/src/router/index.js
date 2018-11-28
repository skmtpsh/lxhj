import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: '/credit',
    children: [
      {
        path: 'credit',
        component: () => import('@/views/credit/index'),
        name: 'credit',
        meta: {title: 'credit'}
      }
    ]
  }
]
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  // base: '/fe-risk',
  base: __dirname,
  routes: constantRouterMap
})

// export const asyncRouterMap = []
