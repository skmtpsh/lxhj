import 'babel-polyfill' // npm uninstall babel-plugin-transform-runtime --save
import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import store from './store'

import '@/styles/index.scss' // global css
// import NProgress from 'nprogress' // progress bar

// import 'nprogress/nprogress.css'// progress bar style
import './icons' // icon

import filters from './filters'

// NProgress.configure({ showSpinner: true })// NProgress Configuration

// Vue.use(Element, {
//   size: 'medium'
// })
Vue.directive('scroll', {
  // 当绑定元素插入到 DOM 中
  inserted (el, binding) {
    let mousetype = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel'
    let direction = ''
    el.addEventListener(mousetype, (e) => {
      e.preventDefault()
      if (e.detail) {
        direction = !(e.detail > 0)
      } else if (e.wheelDelta) {
        direction = e.wheelDelta > 0
      }
      binding.value(direction)
    })
  }
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   next()
// })
// router.afterEach(() => {
//   NProgress.done() // finish progress bar
// })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
