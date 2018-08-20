import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import FastClick from 'fastclick'
import '@/styles/base.css'
Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
