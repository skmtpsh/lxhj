<template>
  <section class="content">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">主页面板</a></el-breadcrumb-item>
    </el-breadcrumb>
  </section>
</template>
<script>
export default {
  name: 'MainApp',
  data () {
    return {}
  }
}
</script>
