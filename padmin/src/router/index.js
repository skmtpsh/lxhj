import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index') },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  }
]
export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = []
