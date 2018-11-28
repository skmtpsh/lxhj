<template>
  <div>
    <group v-for="(item, index) in lists" :key="index">
      <cell
      :title="item.title"
      is-link
      :border-intent="false"
      :arrow-direction="item.show ? 'up' : 'down'"
      @click.native="item.show = !item.show"></cell>
      <div class="slide" :class="item.show ? 'animate' : ''">
        <div class="intro">{{item.intro}}</div>
      </div>
    </group>
  </div>
</template>
<script>
import { Cell, Group } from 'vux'
export default {
  data () {
    return {
      lists: [
        {show: false, title: '什么是展期？', intro: '如果您短借订单到期，无法按时还款，钱达达提供延期还款服务以避免对您的信用造成影响。您可以在账单上方点击【申请展期】按钮，选择延期还款天数并支付展期费用，即可延期还款。展期不会影响您的信用评分，请放心使用。'},
        {show: false, title: '申请展期需要什么条件?', intro: '申请展期需要什么条件,如果您短借订单到期，无法按时还款'},
        {show: false, title: '申请展期后，多少天之后还款？', intro: '申请展期后,如果您短借订单到期，无法按时还款'},
        {show: false, title: '展期费用如何计算？', intro: '展期费用如何计算,如果您短借订单到期，无法按时还款'},
        {show: false, title: '我能申请多少次展期？', intro: '我能申请多少次展期,如果您短借订单到期，无法按时还款'}
      ]
    }
  },
  components: {
    Cell,
    Group
  },
  beforeCreate () {
    document.getElementsByTagName('body')[0].className = 'intro'
  }
}
</script>
<style lang="less" scoped>
.intro {
  color: #999999;
  line-height: 1.5;
  padding: 30px;
}
.slide {
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>

