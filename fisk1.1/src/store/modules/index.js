import sideBar from '@/metadata/sidebar'
const index = {
  state: {
    tabhistory: [],
    sidebar: {
      current: '',
      lists: []
    }
  },
  mutations: {
    SET_TABHISTORY: (state, cur) => {
      if (state.tabhistory.indexOf(cur) === -1) {
        state.tabhistory.push(cur)
      }
    },
    SET_SIDEBAR: (state, cur) => {
      // console.log(cur)
      state.sidebar.current = cur
    },
    SET_SIDEBAR_LIST: (state, lists) => {
      // console.log(sideBar[lists])
      state.sidebar.lists = sideBar[lists]
    }
  }
}
export default index
