<template>
  <div class="page down">
    <section class="pageimg">
      <img src="../assets/downhead.jpg" class="img" />
    </section>
    <section class="down">
      <div class="wrap">
        <span class="mgbtn" @click="goLink"><img src="../assets/btngo.png" class="img" /></span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    goLink () {
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  // 判断iPhone|iPad|iPod|iOS
        window.location.href = 'https://itunes.apple.com/cn/app/id1404273842?mt=8'
      } else if (/(Android)/i.test(navigator.userAgent)) {   // 判断Android
        window.location.href = 'http://cdn.pursedada.com/huixincaifu.apk'
      }
    }
  },
  created () {
    // let querys = this.$route.query
    // console.log(querys)
  },
  beforeCreate () {
    document.getElementsByTagName('body')[0].className = 'down'
  }
}
</script>
<style lang="less">
.page.down {
  background-color: #feecaa;
  height: 100%;
}
a.mgbtn {
  display: block;
  padding: 0.1866rem 0
}
.img {
  max-width: 100%;
  // width: 100%;
}
.pageimg {
  line-height: 0;
}
.down {
  background-image: url('./../assets/downbot.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 4.5rem;
}
.page.down .wrap {
  padding: 0 1.3rem;
  color: #adadad;
}
</style>
