import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

NProgress.configure({ showSpinner: false })
router.beforeEach((to, from, next) => {
  console.log(1)
  NProgress.start()
  let a = 'token'
  if (a === 'token') {
    next()

    // if (to.path === '/login') {
    //   next({ path: '/' })
    //   // NProgress.done()
    // } else {

    // }
  }
})

router.afterEach(() => {
  console.log(2)
  NProgress.done() // finish progress bar
})
