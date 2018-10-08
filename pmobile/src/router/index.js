import Vue from 'vue'
import Router from 'vue-router'
import PostCss from '@/components/PostCss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/postcss',
      name: 'postcss',
      component: PostCss
    }
  ]
})
