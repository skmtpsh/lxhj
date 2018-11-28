import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: (resolve) => {
      require(['@/views/repay'], resolve)
    }
  },
  {
    path: '/advance',
    component: (resolve) => {
      require(['@/views/repay/payadvancd'], resolve)
    }
  },
  {
    path: '/apply',
    component: (resolve) => {
      require(['@/views/repay/payapply'], resolve)
    }
  },
  {
    path: '/intro',
    component: (resolve) => {
      require(['@/views/repay/payintro'], resolve)
    }
  },
  {
    path: '/item',
    component: (resolve) => {
      require(['@/views/repay/payitem'], resolve)
    }
  },
  {
    path: '/proto',
    component: (resolve) => {
      require(['@/views/proto/index'], resolve)
    }
  },
  {
    path: '/down',
    component: (resolve) => {
      require(['@/views/down/index'], resolve)
    }
  },
  {
    path: '/downwx',
    component: (resolve) => {
      require(['@/views/down/downwx'], resolve)
    }
  },
  {
    path: '/proto/shortloan',
    component: (resolve) => {
      require(['@/views/proto/shortloan'], resolve)
    }
  },
  {
    path: '/proto/exhibit',
    component: (resolve) => {
      require(['@/views/proto/exhibit'], resolve)
    }
  }
]

export default new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  // base: '/fe-risk',
  base: __dirname,
  routes
})
