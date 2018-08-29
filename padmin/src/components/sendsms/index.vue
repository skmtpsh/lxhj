<template>
  <el-button @click="sendMsg" size="mini" type="primary" :disabled="isDisabled">{{buttonName}}</el-button>
</template>
<script>
let setTime = 10
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    buttonName: {
      type: String,
      default: '发送验证码'
    },
    time: {
      type: Number,
      default: setTime
    }
  },
  methods: {
    sendMsg () {
      this.isDisabled = true
      let interval = window.setInterval(() => {
        this.buttonName = '（' + this.time + '秒）后重新发送'
        --this.time
        if (this.time < 0) {
          this.buttonName = '发送验证码'
          this.time = setTime
          this.isDisabled = false
          window.clearInterval(interval)
        }
      }, 1000)
      // 时间倒计时
      // var wait = time
      // var stime=function(){
      //   if (wait == 0) {
      //     fn()
      //     stime=null;
      //   } else {
      //     wait--
      //     $(o).html(wait+content)
      //     setTimeout(function () {
      //       stime()
      //     }, 1000)
      //   }
      // }
      // stime()
    }
  }
}
</script>
