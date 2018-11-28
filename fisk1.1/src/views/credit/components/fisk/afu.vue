<template>
  <div>
    <dl class="cardinfo">
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>ZC信用分：</span><b v-if="afuObj">{{afuObj.riskZcCreditScore}}</b></el-col>
          <el-col :span="6"><span>违约概率：</span>
            <template v-if="afuObj">
              <el-tag v-if="checkRate" size="small" :type="checkRate">{{afuObj.riskContractBreakRate}}</el-tag>
              <b v-else>{{afuObj.riskContractBreakRate}}</b>
            </template>
          </el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>被查询统计</dt>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>其它机构数：</span><b v-if="afuObj.riskQueryStatistics">{{afuObj.riskQueryStatistics.riskOtherOrgCount}}</b></el-col>
          <el-col :span="6"><span>其它机构查询数：</span><b v-if="afuObj.riskQueryStatistics">{{afuObj.riskQueryStatistics.riskTimesByOtherOrg}}</b></el-col>
          <el-col :span="6"><span>本机构查询数：</span><b v-if="afuObj.riskQueryStatistics">{{afuObj.riskQueryStatistics.riskTimesByCurrentOrg}}</b></el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>被查询记录</dt>
      <dd>
        <el-table
          header-row-class-name='headclass'
          :data="afuObj.riskQueryHistory"
          style="width: 100%">
          <el-table-column
            prop="riskOrgName"
            label="机构代码"
            width="180">
          </el-table-column>
          <el-table-column
            prop="riskOrgType"
            label="机构类型">
          </el-table-column>
          <el-table-column
            prop="riskQueryReason"
            label="查询原因">
            <template slot-scope="scope">
              <span>{{scope.row.riskQueryReason | FilterToFisk('riskQueryReasonCode')}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="riskTime"
            label="查询时间">
          </el-table-column>
        </el-table>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>风险项记录</dt>
      <dd>
        <el-table
          header-row-class-name='headclass'
          :data="afuObj.riskResults"
          style="width: 100%">
          <el-table-column
            prop="riskOrgName"
            label="机构代码"
            width="180">
          </el-table-column>
          <el-table-column
            prop="riskItemTypeCode"
            label="命中项目码"
            width="180">
            <template slot-scope="scope">
              <span>{{scope.row.riskItemTypeCode | FilterToFisk('riskItemTypeCode')}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="riskItemValue"
            label="命中内容"
            width="180">
          </el-table-column>
          <el-table-column
            prop="riskTypeCode"
            label="风险类别码"
            width="180">
            <template slot-scope="scope">
              <span>{{scope.row.riskTypeCode | FilterToFisk('riskTypeCode')}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="riskDetail"
            label="风险明细">
          </el-table-column>
          <el-table-column
            prop="riskTime"
            label="风险最近时间">
          </el-table-column>
        </el-table>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>历史借款记录</dt>
      <dd>
        <el-table
          header-row-class-name='headclass'
          :data="afuObj.riskLoanRecords"
          style="width: 100%">
          <el-table-column
            prop="riskOrgName"
            label="机构代码"
            width="80">
          </el-table-column>
          <el-table-column
            prop="riskName"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="riskLoanDate"
            label="借款时间">
          </el-table-column>
          <el-table-column
            prop="riskLoanAmount"
            label="借款金额(元)">
          </el-table-column>
          <el-table-column
            prop="riskApprovalStatusCode"
            label="审批结果">
            <template slot-scope="scope">
              <span>{{scope.row.riskApprovalStatusCode | FilterToFisk('approvalStatusCode')}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="riskLoanStatusCode"
            label="还款状态">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.riskLoanStatusCode === '301'" size="small" type="warning">{{scope.row.riskLoanStatusCode | FilterToFisk('loanStatusCode')}}</el-tag>
              <el-tag v-else-if="scope.row.riskLoanStatusCode === '302'" size="small" type="danger">{{scope.row.riskLoanStatusCode | FilterToFisk('loanStatusCode')}}</el-tag>
              <span v-else>{{scope.row.riskLoanStatusCode | FilterToFisk('loanStatusCode')}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="riskOverdueAmount"
            label="逾期金额(元)">
          </el-table-column>
          <el-table-column
            prop="riskOverdueStatus"
            label="逾期情况">
          </el-table-column>
          <el-table-column
            prop="riskOverdueM3"
            label="逾3个月">
          </el-table-column>
          <el-table-column
            prop="riskOverdueM6"
            label="逾6个月">
          </el-table-column>
          <el-table-column
            prop="riskOverdueTotal"
            label="总逾期">
          </el-table-column>
        </el-table>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: {
    afuObj: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    checkRate () {
      let rate = this.afuObj.riskContractBreakRate
      if (rate) {
        let rateRed = '73.6%'
        let rateWarning = '51.88%'
        if (rate === rateRed) {
          return 'danger'
        }
        if (rate === rateWarning) {
          return 'warning'
        }
        return ''
      }
    }
  }
}
</script>
