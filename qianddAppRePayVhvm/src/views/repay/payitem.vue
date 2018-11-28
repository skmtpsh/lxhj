<template>
  <div class="page">
    <main class="content">
      <check-list :datalist="lists" :showicon="true"></check-list>
    </main>
    <section class="btnbox">
      <x-button type="primary">立即还款</x-button>
    </section>
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
.page {
  .btnbox {
    padding: 30px;
  }
}
</style>
