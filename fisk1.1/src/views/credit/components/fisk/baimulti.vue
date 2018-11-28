<template>
  <div>
    <dl class="cardinfo">
      <dt>决策结果建议</dt>
      <dd>
        <el-row :gutter="60">
            <el-col :span="24"><span>最终决策结果：</span><b>{{baimulObj.multipointDecision}}</b></el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>策略集明细</dt>
      <dd>
        <el-table
          header-row-class-name='headclass'
          :data="baimulObj.multipointDetail"
          style="width: 100%">
          <el-table-column
            prop="ruleName"
            label="规则"
            width="280">
          </el-table-column>
          <el-table-column
            prop="ruleMemo"
            label="风险描述">
            <template slot-scope="scope">
              <comp-multi :check-data="scope.row"></comp-multi>
            </template>
          </el-table-column>
          <el-table-column
            prop="ruleDecision"
            label="建议决策">
          </el-table-column>
        </el-table>
      </dd>
    </dl>
  </div>
</template>
<script>
let compMulti = {
  render: function (h) {
    return (
      <span>
        {
          this.checkNum ? <el-tag size="small" disable-transitions type={this.checkNum}>{this.checkData.ruleMemo}</el-tag> : <span>{this.checkData.ruleMemo}</span>
        }
      </span>
    )
  },
  props: ['checkData'],
  computed: {
    checkNum () {
      let scop = this.checkData
      let reg = /[0-9]+/g
      if (scop.ruleName && scop.ruleMemo) {
        let arr = scop.ruleMemo.split(',')
        if (scop.ruleName.indexOf('三天') > -1) {
          if (arr.length > 0 && reg.test(arr[0])) {
            if (parseFloat(arr[0].match(reg)[0]) > 0) {
              return 'danger'
            }
          }
        } else if (scop.ruleName.indexOf('七天') > -1) {
          if (arr.length > 0 && reg.test(arr[0])) {
            let num = parseFloat(arr[0].match(reg)[0])
            if (num >= 8) {
              return 'danger'
            } else if (num < 8) {
              return 'warning'
            } else {
              return false
            }
          }
        } else if (scop.ruleName.indexOf('一个月') > -1) {
          if (arr.length > 0 && reg.test(arr[0])) {
            let num = parseFloat(arr[0].match(reg)[0])
            if (num > 25) {
              return 'danger'
            } else if (num <= 25 && num >= 15) {
              return 'warning'
            } else {
              return false
            }
          }
        }
        return false
      }
      return false
    }
  }
}

export default {
  name: 'baimul',
  components: {
    compMulti
  },
  props: ['baimulObj'],
  methods: {
    checkMemo (val) {
    }
  }
}
</script>
