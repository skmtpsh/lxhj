<template>
  <div class="wrapper">
    <div class="headerWrapper">
      <div class="header">
        <div class="logo">PAdmin</div>
        <div class="topheader"></div>
      </div>
    </div>
    <div class="mainWrapper">
      <aside class="sidebar">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            default-active="2">
            <el-submenu index="1">
              <template slot="title">
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </aside>
      <section class="content">

      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.mainWrapper {
  margin-top: -80px;
  padding: 80px 0 0;
  min-height: 100%;

  padding: 0;
  margin-top: 0;
  height: 100%;
  min-height: auto
}
.sidebar {
  width: 240px;
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 80px;
  background: #fff;
}
.content {
  padding-left: 270px;
}
.headerWrapper {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1500;
  .header {
    height: 80px;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    background-color: #fff;
    position: relative
  }
}
</style>
