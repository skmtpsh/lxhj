import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

NProgress.configure({ showSpinner: false })
router.beforeEach((to, from, next) => {
  NProgress.start()
  if ('token') {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done
    } else {

    }
  }
})
router.afterEach(() => {
  NProgress.done() // finish progress bar
})