// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import 'lib-flexible'
import { LoadingPlugin, ToastPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: (resolve) => {
      require(['./components/Main.vue'], resolve)
    }
  },
  {
    path: '/down',
    component: (resolve) => {
      require(['./components/Download.vue'], resolve)
    }
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  base: __dirname,
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
