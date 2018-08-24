<template>
  <aside class="sidebar">
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航</span>
        </el-menu-item>
        <el-menu-item-group>
          <template slot="title">后台分类</template>
          <el-menu-item index="0"><i class="el-icon-setting"></i>我的项目</el-menu-item>
          <el-menu-item index="1"><i class="el-icon-menu"></i>我的收藏</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">演示</template>
          <el-menu-item index="2"><i class="el-icon-goods"></i>实例演示</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {}
  }
}
</script>
