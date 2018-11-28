<template>
  <div>
    <dl class="cardinfo">
      <dt>决策结果建议</dt>
      <dd>
        <el-row :gutter="60">
            <el-col :span="24"><span>最终决策结果：</span>{{baiantiObj.antifraudDecision}}</el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>策略集明细</dt>
      <dd>
        <el-table
          header-row-class-name='headclass'
          :data="baiantiObj.antifraudDetail"
          style="width: 100%">
          <el-table-column
            prop="ruleName"
            label="规则"
            width="280">
          </el-table-column>
          <el-table-column
            prop="ruleMemo"
            label="风险描述">
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
export default {
  name: 'baianti',
  props: ['baiantiObj']
}
</script>
