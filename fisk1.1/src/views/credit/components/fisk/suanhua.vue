<template>
  <dl class="cardinfo">
    <dd>
      <el-row :gutter="60">
        <el-col :span="12"><span>风险评分：</span>{{suanhuaObj.riskAppRst}}</el-col>
        <el-col :span="12"><span>备注：0-1000分,分数越低风险越高</span></el-col>
      </el-row>
    </dd>
    <dd>
      <el-row :gutter="60">
        <el-col :span="12"><span>风险等级：</span>
          <el-tag v-if="suanhuaObj.riskStanRiskRate" size="small" :type="checkRate(suanhuaObj.riskStanRiskRate)">{{suanhuaObj.riskStanRiskRate}}</el-tag>
        </el-col>
        <el-col :span="12"><span>备注：评级区间A~Q按字母殊勋越靠前风险越高</span></el-col>
      </el-row>
    </dd>
    <dd>
      <el-row :gutter="60">
        <el-col :span="24"><span>备注：</span><el-tag size="small" v-if="suanhuaObj.riskAppRstRemark" type="warning">{{suanhuaObj.riskAppRstRemark}}</el-tag></el-col>
      </el-row>
    </dd>
  </dl>
</template>
<script>
export default {
  name: 'suanhua',
  props: {
    suanhuaObj: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    checkRate (val) {
      let rate = val + ''
      if (rate) {
        if (/^[A-Fa-f]$/.test(rate)) {
          return 'danger'
        }
        if (/^[G-Ng-n]$/.test(rate)) {
          return 'warning'
        }
        if (/^[O-Qo-q]$/.test(rate)) {
          return 'success'
        }
      }
      return ''
    }
  }
}
</script>
