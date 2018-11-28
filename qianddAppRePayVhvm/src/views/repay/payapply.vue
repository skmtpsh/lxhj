<template>
  <div class="page">
    <header class="header">
      <h2>选择展期期限</h2>
      <h3>申请展期需支付展期服务费，建议您及时还款</h3>
    </header>
    <main class="content">
      <checker
      v-model="day"
      default-item-class="item"
      selected-item-class="item-selected">
        <checker-item :value="7" @on-item-click="onItemClick"> <span>7</span> 天 </checker-item>
        <checker-item :value="14" @on-item-click="onItemClick"> <span>14</span> 天 </checker-item>
        <checker-item :value="21" @on-item-click="onItemClick"> <span>21</span> 天 </checker-item>
      </checker>
      <group>
        <cell title="服务基础费" :is-loading="!money" :value="money"></cell>
        <cell title="利息" :is-loading="!money" :value="money"></cell>
        <cell title="逾期费用" :is-loading="!money" :value="money"></cell>
        <cell title="合计" :is-loading="!money" :value="money"></cell>
      </group>
    </main>
    <section class="btnbox">
      <check-icon :value.sync="agree"> 我已阅读并同意
        <router-link to="/proto" >《展期协议》 </router-link>
      </check-icon>
      <x-button type="primary">立即申请</x-button>
    </section>
  </div>
</template>
<script>
import { Checker, CheckerItem, Cell, Group, CheckIcon } from 'vux'
export default {
  components: {
    CheckIcon,
    Checker,
    CheckerItem,
    Group,
    Cell
  },
  data () {
    return {
      agree: true,
      day: 7,
      money: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  methods: {
    onItemClick (value, disabled) {
      console.log(value, disabled)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../style/variable.less';
.page {
  .btnbox {
    padding: 30px;
    &>div {
      margin-top: 30px;
      margin-bottom: 90px;
    }
  }
}
.header {
  padding: 30px;
  background: #fff;
  h2 {
    font-size: 78px;
    margin: 30px 0 0;
    color: #333;
  }
  h3 {
    margin: 60px 0 0;
    font-size: 48px;
    color: #979eac;
  }
}
.content {
  background: #fff;
  .vux-checker-box {
    display: flex;
  }
  .vux-checker-item {
    flex: 1;
  }
  .item {
    width: 342px;
    height: 120px;
    line-height: 120px;
    margin: 120px 30px;
    border-radius: 20px;
    background-color: #f7f8fa;
    color: #979eac;
    text-align: center;
    span {
      font-size: 72px;
    }
  }
  .item-selected {
    color: #fff;
    background-color: #456df1;
  }

}
</style>
