<template>
  <div>
    <div>
      <img class="logo" src="../assets/vux_logo.png">
      <h1>我是测试</h1>
      <h2>我是测试2</h2>
      <div class="box"></div>
      <group title="设置姓名">
        <x-input title="姓名" name="username" class="input" placeholder="请输入姓名" ></x-input>
        <x-button type="primary" @click.native="submit">提交</x-button>
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
.box { width: 350px; height: 100px; border: 1px solid #000; }
.input {
  font-size: 28px;
}
h1 {
  font-size: 32px;
}
h2 {
  font-size: 28px;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
