<template>
  <aside class="sidebar" id="sideBar">
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu
        active-text-color="#ffffff"
        text-color="#8ca1af"
        @select="handleSel" :collapse="isCollapse" :default-openeds="openMenu">
        <el-submenu :index="item.key" v-for="(item, index) in sidebarList" v-bind:key="index">
          <template slot="title">
            <svg-icon :icon-class="item.ico" />
            <span slot="title">{{item.value}}</span>
          </template>
          <template v-if="item.child" v-for="(children, index) in item.child">
            <el-menu-item :index="children.key" v-bind:key="index">{{children.value}}</el-menu-item>
          </template>
        </el-submenu>
      </el-menu>
      <!-- <div class="certibox"><el-tag type="success" size="mini">完全一致</el-tag> <el-button type="text">运营商报告</el-button></div> -->
    </el-scrollbar>
  </aside>
</template>
<script>
import { mapGetters } from 'vuex'
// import sideBar from '@/metadata/sidebar'
// const MAXHEIGHT = document.documentElement.scrollHeight || document.body.scrollHeight
// const MAXOFFSET = document.documentElement.offsetHeight || document.body.offsetHeight
// const MAXCLIENT = document.documentElement.clientHeight || document.body.clientHeight
// const BounceOut = function (k) {
//   if (k < (1 / 2.75)) {
//     return 7.5625 * k * k
//   } else if (k < (2 / 2.75)) {
//     return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75
//   } else if (k < (2.5 / 2.75)) {
//     return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375
//   } else {
//     return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375
//   }
// }
export default {
  name: 'Sidebar',
  data () {
    return {
      isCollapse: false,
      openMenu: []
    }
  },
  computed: {
    ...mapGetters([
      'sidebarList'
    ])
  },
  mounted () {
    this.scrollDom = document.getElementsByClassName('el-scrollbar__wrap')[0]
  },
  methods: {
    handleSel (key, keyPath) {
      this.$nextTick(() => {
        // console.log(key)
        let keyDOm = document.getElementById(key)
        // let timer = null
        if (keyDOm) {
          // console.log('=======')
          // console.log('scrollHeight = ' + this.scrollDom.scrollHeight)
          // console.log('MAXHEIGHT = ' + MAXHEIGHT)
          // console.log('MAXOFFSET = ' + MAXOFFSET)
          // console.log('MAXCLIENT = ' + MAXCLIENT)
          // console.log('offsetTop = ' + keyDOm.offsetParent.offsetTop)
          // console.log('scrollTop = ' + this.scrollDom.scrollTop)
          // console.log('=======')
          // this.scrollDom.scrollTo(0, keyDOm.offsetParent.offsetTop)
          // document.getElementById(key).scrollIntoView()
          this.scrollDom.scrollTop = keyDOm.offsetParent.offsetTop
          // clearInterval(timer)
          // var startTime = new Date()
          // timer = setInterval(() => {
          //   var percentage = (new Date() - startTime) / 2000
          //   var speed = (keyDOm.offsetParent.offsetTop - this.scrollDom.scrollTop) * BounceOut(percentage)
          //   speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
          //   if (this.scrollDom.scrollTop === keyDOm.offsetParent.offsetTop) {
          //     clearInterval(timer)
          //   } else {
          //     if (this.scrollDom.scrollTop + MAXHEIGHT >= this.scrollDom.scrollHeight) {
          //       this.scrollDom.scrollTop = this.scrollDom.scrollHeight - MAXHEIGHT
          //       clearInterval(timer)
          //     }
          //     this.scrollDom.scrollTop = this.scrollDom.scrollTop + speed
          //   }
          // }, 13)
        }
      })
    }
  },
  watch: {
    sidebarList () {
      if (this.sidebarList) {
        this.sidebarList.forEach((item) => {
          this.openMenu.push(item.key)
        })
      }
    }
  },
  created () {
  }
}
</script>
<style>
#sideBar .certibox {
  padding: 10px;
  text-align: center
}
#sideBar .el-menu-item:focus,
#sideBar .el-menu-item:hover {
  outline: none;
  background-color: #2c3942;
}
#sideBar .el-submenu__title:hover {
  background-color: #2c3942;
}
</style>
