<template>
  <el-breadcrumb class="breadnav" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">主页面板</a></el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
.breadnav {
  padding: 15px 10px;
  background: #ffffff
}
</style>
