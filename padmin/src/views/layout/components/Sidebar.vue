<template>
  <aside class="sidebar">
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu>
        <el-menu-item-group>
          <template slot="title">后台分类</template>
          <el-menu-item index="0"><i class="el-icon-setting"></i>我的项目</el-menu-item>
          <router-link :to="{ path: '/example/io' }"><el-menu-item index="1"><i class="el-icon-menu"></i>我的收藏</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">演示</template>
          <router-link :to="{ path: '/example/io' }"><el-menu-item index="2"><i class="el-icon-goods"></i>io.soket 演示</el-menu-item></router-link>
          <router-link :to="{ path: 'register', query: { plan: 'private' }}"><el-menu-item index="3"><i class="el-icon-goods"></i>拖动 演示</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">演示</template>
          <router-link :to="{ path: '/example/io' }"><el-menu-item index="2"><i class="el-icon-goods"></i>io.soket 演示</el-menu-item></router-link>
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
