<template>
  <div>
    <div>
      <img class="logo" src="../assets/vux_logo.png">
      <h1>我是测试</h1>
      <h2>我是测试2</h2>
      <group title="设置姓名">
        <x-input title="姓名" name="username" class="input" placeholder="请输入姓名" ></x-input>
      </group>
    </div>
  </div>
</template>

<script>
import { Group, XInput, XButton, Flexbox, FlexboxItem, Toast } from 'vux'
export default {
  components: {
    Group,
    Toast,
    XInput,
    XButton,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.input {
  padding: 0rem 0.2rem 0.28rem;
  font-size: 28px;
}
h1 {
  font-size: 0.32rem
}
h2 {
  font-size: 18px;
}
.logo {
  width: 1.3333rem;
  height: 1.3333rem
}
</style>
