<template>
  <div class="appLayout">
    <Subhead />
    <div class="mainWrapper">
      <el-scrollbar class="page-component" id="pagescoll">
        <Sidebar />
        <MainApp />
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import MainApp from './components/MainApp'
import Sidebar from './components/Sidebar'
import Subhead from './components/Subhead'
export default {
  name: 'Layout',
  components: {
    MainApp,
    Sidebar,
    Subhead
  },
  data () {
    return {}
  }
}
</script>
