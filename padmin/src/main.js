import Vue from 'vue'
import App from './App'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import i18n from './lang' // Internationalization

import router from './router'

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
