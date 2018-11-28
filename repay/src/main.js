import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router/index'
import './style/index.less'
import { Flexbox, FlexboxItem, ViewBox, XButton, LoadingPlugin, ToastPlugin, AlertPlugin, XHeader, ConfirmPlugin } from 'vux'
import './icons' // icon

// import './utils/vconsole' // vconsole

Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('view-box', ViewBox)
Vue.component('x-button', XButton)
Vue.component('x-header', XHeader)
Vue.use(ConfirmPlugin)

Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

Vue.use(VueRouter)

FastClick.attach(document.body)

Vue.config.productionTip = false

router.afterEach((to) => {
  if (to.path === '/down') {
    setTimeout(() => {
      window._hmt = window._hmt || []
      var hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?ef30f4f208e2fa76ad7bc77e5bd8014b'
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    }, 0)
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
