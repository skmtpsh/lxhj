<template>
  <dl class="cardinfo">
    <dd>
      <el-row :gutter="60">
        <el-col :span="8"><span>真实姓名：</span><b>{{zhimaObj.riskData.riskZmDetailInfo.riskRealCheckName}}</b></el-col>
        <el-col :span="8"><span>芝麻分：</span><b>{{zhimaObj.riskData.riskZmDetailInfo.riskZmScore | FiltToZhima}}</b></el-col>
        <el-col :span="8"><span>借呗金额(元)：</span><b>{{zhimaObj.riskData.riskZmDetailInfo.riskJiebeiAmount | FiltToZhima}}</b></el-col>
      </el-row>
    </dd>
    <dd>
      <el-row :gutter="60">
        <el-col :span="8"><span>花呗总金额(元)：</span><b>{{zhimaObj.riskData.riskZmDetailInfo.riskHuabeiTotalAmount | FiltToZhima}}</b></el-col>
        <el-col :span="8"><span>花呗可用金额(元)：</span><b>{{zhimaObj.riskData.riskZmDetailInfo.riskHuabeiAvailAmount | FiltToZhima}}</b></el-col>
      </el-row>
    </dd>
  </dl>
</template>
<script>
export default {
  props: {
    zhimaObj: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  filters: {
    FiltToZhima (value) {
      let str = ''
      switch (value) {
        case '-1':
          str = '用户没有该项数据'
          break
        case '-2':
          str = '该项数据获取失败'
          break
        default:
          str = value
      }
      return str
    }
  }
}
</script>
