// import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import getters from './getters'
// Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    index
  },
  getters
})

export default store
