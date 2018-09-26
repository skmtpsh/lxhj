import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const module = {
  state: {
    address: {},
    modaddress: {}
  },
  getters: {
    getAddress: (state) => {
      return state.address
    },
    modAddress: (state) => {
      return state.modaddress
    }
  },
  mutations: {
    setAddr (state, addr) {
      state.address = addr
    },
    setModAddr (state, addr) {
      state.modaddress = addr
    }
  }
}
const store = new Vuex.Store(module)
export default store
