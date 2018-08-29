<template>
  <div class="headerWrapper">
    <div class="header">
      <div class="logo">PAdmin 管理系统</div>
      <div class="topheader">
        <ul class="headernav">
          <li></li>
          <li>
            <el-menu
              background-color="#409EFF"
              menu-trigger="click"
              text-color="#fff"
              mode="horizontal">
              <el-submenu index="2" popper-class="popclass">
                <template slot="title"><i class="el-icon-service" style="color:#fff"></i> Admin</template>
                <el-menu-item index="2-1">设置</el-menu-item>
                <el-menu-item index="2-2">退出</el-menu-item>
              </el-submenu>
            </el-menu>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Subhead',
  data () {
    return {}
  }
}
</script>
