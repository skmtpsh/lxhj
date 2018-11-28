<template>
  <div>
    <dl class="cardinfo">
      <dt><span id="FISK_XINYAN_BALCK">负面拉黑</span></dt>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>探查结论：</span>
            <el-tag type="warning" v-if="blackObj.riskDataDesc === '建议拉黑'" size="small">{{blackObj.riskDataDesc}}</el-tag>
            <b v-else>{{blackObj.riskDataDesc}}</b>
          </el-col>
          <el-col :span="12"><span>探查明细：</span><b>{{blackObj.riskDataCode | FilterToFisk('riskBlackDataCode') }}</b></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>最大逾期金额(元)：</span><b v-if="blackObj.riskDataDetail">{{blackObj.riskDataDetail.riskMaxOverdueAmt}}</b></el-col>
          <el-col :span="6"><span>最长逾期天数：</span><b v-if="blackObj.riskDataDetail">{{blackObj.riskDataDetail.riskMaxOverdueDays}}</b></el-col>
          <el-col :span="6"><span>最近逾期时间：</span><b v-if="blackObj.riskDataDetail">{{blackObj.riskDataDetail.riskLatestOverdueTime}}</b></el-col>
          <el-col :span="6"></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>当前逾期机构数：</span><b v-if="blackObj.riskDataDetail">{{blackObj.riskDataDetail.riskCurrentlyOverdue}}</b></el-col>
          <el-col :span="6"><span>当前履约机构数：</span><b v-if="blackObj.riskDataDetail">{{blackObj.riskDataDetail.riskCurrentlyPerformance}}</b></el-col>
          <el-col :span="6"><span>异常还款机构数：</span><b v-if="blackObj.riskDataDetail">{{blackObj.riskDataDetail.riskAccExc}}</b></el-col>
          <el-col :span="6"><span>睡眠机构数：</span><b v-if="blackObj.riskDataDetail">{{blackObj.riskDataDetail.riskAccSleep}}</b></el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt><span id="FISK_XINYAN_WHITE">负面洗白</span></dt>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>探查结论：</span>
            <el-tag type="warning" v-if="whiteObj.riskDataDesc === '建议拉黑'" size="small">{{whiteObj.riskDataDesc}}</el-tag>
            <b v-else>{{whiteObj.riskDataDesc}}</b>
          </el-col>
          <el-col :span="8"><span>探查明细：</span><b>{{whiteObj.riskDataCode | FilterToFisk('riskDataCode') }}</b></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>最大履约金额(元)：</span><b v-if="whiteObj.riskDataDetail">{{whiteObj.riskDataDetail.riskMaxPerformanceAmt}}</b></el-col>
          <el-col :span="6"><span>最近履约时间：</span><b v-if="whiteObj.riskDataDetail">{{whiteObj.riskDataDetail.riskLatestPerformanceTime}}</b></el-col>
          <el-col :span="6"><span>履约笔数：</span><b v-if="whiteObj.riskDataDetail">{{whiteObj.riskDataDetail.riskCountPerformance}}</b></el-col>
          <el-col :span="6"></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>当前逾期机构数：</span><b v-if="whiteObj.riskDataDetail">{{whiteObj.riskDataDetail.riskCurrentlyOverdue}}</b></el-col>
          <el-col :span="6"><span>当前履约机构数：</span><b v-if="whiteObj.riskDataDetail">{{whiteObj.riskDataDetail.riskCurrentlyPerformance}}</b></el-col>
          <el-col :span="6"><span>异常还款机构数：</span><b v-if="whiteObj.riskDataDetail">{{whiteObj.riskDataDetail.riskAccExc}}</b></el-col>
          <el-col :span="6"><span>睡眠机构数：</span><b v-if="whiteObj.riskDataDetail">{{whiteObj.riskDataDetail.riskAccSleep}}</b></el-col>
        </el-row>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    whiteObj: {
      type: Object,
      default: () => {}
    },
    blackObj: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
