<template>
  <div>
    <dl class="cardinfo">
      <dt>决策结果建议</dt>
      <dd>
        <el-row :gutter="60">
            <el-col :span="24"><span>最终决策结果：</span><b>{{bairegiObj.riskFinalDecision | FiltToDecision}}</b></el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>策略集明细</dt>
      <dd>
        <div v-if="bairegiObj.riskData" v-for="(item, index) in bairegiObj.riskData" :key="index">
          <el-table
            header-row-class-name='headclass'
            :data="item.riskHitRulesList"
            style="width: 100%">
            <el-table-column
              prop="riskRuleName"
              label="规则"
              width="280">
            </el-table-column>
            <el-table-column
              prop="riskMemo"
              label="风险描述">
            </el-table-column>
            <el-table-column
              prop="riskDecision"
              label="建议决策">
              <template slot-scope="scope">
                {{scope.row.riskDecision | FiltToDecision}}
              </template>
            </el-table-column>
          </el-table>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'baiRegist',
  props: ['bairegiObj'],
  filters: {
    FiltToDecision (value) {
      let str = ''
      switch (value) {
        case 'Accept':
          str = '通过，无风险'
          break
        case 'Reject':
          str = '拒绝，风险评估决策为高风险建议拒绝'
          break
        case 'Review':
          str = '审核，风险评估决策为低风险建议人工审核'
          break
        default:
          str = ''
      }
      return str
    }
  }
}
</script>
