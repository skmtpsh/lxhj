<template>
  <dl class="cardinfo">
    <dt>
      <el-row :gutter="50">
        <el-col :span="5">机构</el-col>
        <el-col :span="2">结果</el-col>
        <el-col :span="17">说明</el-col>
      </el-row>
    </dt>
    <dd>
      <el-row :gutter="50">
        <el-col :span="5">是否命中华道黑名单</el-col>
        <el-col :span="2">
          <template v-if="blackObj.emayHit">
            <el-tag size="small" type="danger" v-if="blackObj.emayHit === '是'"><b>{{blackObj.emayHit}}</b></el-tag>
            <b v-else>{{blackObj.emayHit}}</b>
          </template>
        </el-col>
        <!-- <el-col :span="17">{{blackObj.agentDetail}}</el-col> -->
      </el-row>
    </dd>
    <dd>
      <el-row :gutter="50">
        <el-col :span="5"><span>是否命中百度黑名单</span></el-col>
        <el-col :span="2">
          <template v-if="blackObj.baiduHit">
            <el-tag size="small" type="danger" v-if="blackObj.baiduHit === '是'"><b>{{blackObj.baiduHit}}</b></el-tag>
            <b v-else>{{blackObj.baiduHit}}</b>
          </template>
        </el-col>
        <el-col :span="17">
          <compLetter :checkData="blackObj.baiduDetail" />
          <!-- <el-tag v-if="checkLetter" size="small" :type="checkLetter">{{blackObj.baiduDetail}}</el-tag>
          <span v-else>{{blackObj.baiduDetail}}</span> -->
        </el-col>
      </el-row>
    </dd>
    <dd>
      <el-row :gutter="50">
        <el-col :span="5"><span>是否命中机构R黑名单</span></el-col>
        <el-col :span="2">
          <template v-if="blackObj.agentHit">
            <el-tag size="small" type="danger" v-if="blackObj.agentHit === '是'"><b>{{blackObj.agentHit}}</b></el-tag>
            <b v-else>{{blackObj.agentHit}}</b>
          </template>
        </el-col>
        <el-col :span="17">{{blackObj.agentDetail}}</el-col>
      </el-row>
    </dd>
  </dl>
</template>
<script>
let compLetter = {
  render: function (h) {
    return (
      <span>
        {
          this.checkLetter ? <el-tag size="small" type={this.checkLetter}>{this.checkData}</el-tag> : <span>{this.checkData}</span>
        }
      </span>
    )
  },
  props: ['checkData'],
  computed: {
    checkLetter () {
      if (this.checkData) {
        let chartData = this.checkData + ''
        let firstChart = chartData.substring(0, 1)
        if (firstChart === 'A' || firstChart === 'B') {
          return 'danger'
        } else if (firstChart === 'C' || firstChart === 'D') {
          return 'warning'
        } else {
          return ''
        }
      }
      return ''
    }
  }
}
export default {
  components: {
    compLetter
  },
  props: {
    blackObj: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
