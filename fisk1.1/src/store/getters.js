const getters = {
  tabhistory: state => state.index.tabhistory,
  sidebar: state => state.index.sidebar.current,
  sidebarList: state => state.index.sidebar.lists
}
export default getters
