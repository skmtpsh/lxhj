import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constRouterMap = [
  // {
  //   path: '',
  //   component: () => import('@/views/product/index')
  // },
  {
    path: '/detailPro/:goodid',
    component: () => import('@/views/product/index')
  },
  {
    path: '/account',
    component: () => import('@/views/account/index')
  },
  {
    path: '/records',
    component: () => import('@/views/records/index')
  },
  {
    path: '/records/repay',
    component: () => import('@/views/records/repay')
  },
  {
    path: '/order/confirm',
    component: () => import('@/views/order/orderConfirm')
  },
  {
    path: '/order/detail',
    component: () => import('@/views/order/orderDetail')
  },
  {
    path: '/addr',
    component: () => import('@/views/address/index')
  },
  {
    path: '/addr/add',
    component: () => import('@/views/address/add')
  },
  {
    path: '/addr/add/:id',
    component: () => import('@/views/address/add')
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  // mode: 'history',
  base: '/',
  routes: constRouterMap
})
