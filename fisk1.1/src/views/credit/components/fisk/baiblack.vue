<template>
  <div>
    <dl class="cardinfo">
      <dt>决策结果建议</dt>
      <dd>
        <el-row :gutter="60">
            <el-col :span="24"><span>最终决策结果：</span><b>{{baiblackObj.blacklistDecision}}</b></el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>策略集明细</dt>
      <dd>
        <el-table
          header-row-class-name='headclass'
          :data="baiblackObj.blacklistDetail"
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
              <comp-black :check-data="scope.row"></comp-black>
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
let compBlack = {
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
      if (scop.ruleName && scop.ruleMemo) {
        if (scop.ruleName.indexOf('黑名单') > -1) {
          return 'danger'
        } else if (scop.ruleName.indexOf('灰名单') > -1) {
          return 'warning'
        }
        return false
      }
      return false
    }
  }
}
export default {
  name: 'baiblack',
  components: {
    compBlack
  },
  props: ['baiblackObj']
}
</script>
