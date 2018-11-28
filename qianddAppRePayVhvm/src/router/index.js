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
  }
]

export default new Router({
  routes
})
