import Vue from 'vue'
import Router from 'vue-router'
import RouteConfig from './config'

Vue.use(Router)

const commonPath = 'authentication'
const componentPath = 'views/'
const routes = []
RouteConfig.routesList.forEach((item) => {
  const { path, title, compath } = item
  let oRouter = {
    path: `/${commonPath}/${path}`,
    component: (resolve) => {
      require([`@/${componentPath}${compath}.vue`], resolve)
    },
    meta: {
      title: title
    },
    url: `@/${componentPath}${compath}.vue`
  }
  routes.push(oRouter)
})

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
