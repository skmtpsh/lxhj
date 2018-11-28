<template>
  <div class="page">
    <header class="header">
      <h4>待还总金额(元)</h4>
      <h3>4,200.75</h3>
      <section class="btnbox">
        <x-button type="primary">提前还清</x-button>
      </section>
    </header>
    <main class="content">
      <check-list :datalist="lists" :showicon="false"></check-list>
    </main>
  </div>
</template>
<script>
import CheckList from './components/checklist'
export default {
  components: {
    CheckList
  },
  data () {
    return {
      lists: [
        { has: true, check: true, periods: '第1/6期', date: '还款日2018/07/24', money: '559.25', info: '(含利息25.29元)', yuqi: '' },
        { has: false, check: false, periods: '第2/6期', date: '还款日2018/07/24', money: '159.25', info: '(含利息25.29元)', yuqi: '(逾期费20.00元)' },
        { has: false, check: false, periods: '第3/6期', date: '还款日2018/07/24', money: '34595', info: '(含利息25.29元)', yuqi: '' },
        { has: false, check: false, periods: '第4/6期', date: '还款日2018/07/24', money: '549.5', info: '(含利息25.29元)', yuqi: '' },
        { has: false, check: false, periods: '第5/6期', date: '还款日2018/07/24', money: '519.25', info: '(含利息25.29元)', yuqi: '' },
        { has: false, check: false, periods: '第6/6期', date: '还款日2018/07/24', money: '539.95', info: '(含利息25.29元)', yuqi: '' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../style/variable.less';
.page {
  .header {
    text-align: center;
    padding: 30px;
    background: #fff;
    h4 {
      font-size: 42px;
      margin: 30px 0 0;
      color: #979eac;
    }
    h3 {
      font-size: 99px;
      margin: 60px 0 0;
      color: #000;
    }
  }
  .btnbox {
    margin: 90px 230px 30px;
  }
}
</style>
