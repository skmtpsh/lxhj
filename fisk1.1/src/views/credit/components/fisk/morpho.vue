<template>
  <div>
    <dl class="cardinfo">
      <dt>90天多头查询</dt>
      <dd>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>维度</th>
              <th>报告查询次数</th>
              <th>贷款笔数</th>
              <th>贷款机构数</th>
              <th>平均间隔时长</th>
              <th>平均换新机构间隔时长</th>
              <th>最大贷款金额(元)</th>
              <th>最大贷款天数</th>
              <th>平均贷款额度(元)</th>
              <th>最大逾期天数</th>
              <th>逾期贷款笔数</th>
              <th>逾期贷款机构数</th>
              <th>逾期2周期以上机构数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>身份证维度</td>
              <td>
                {{morphoCardObj.riskD90.riskQueryCount | FilterToTotal}}
              </td>
              <td>{{morphoCardObj.riskD90.riskLoanCount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD90.riskLoanTenantCount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD90.riskAverageLoanGapDays | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD90.riskAverageTenantGapDays | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD90.riskMaxLoanAmount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD90.riskMaxLoanPeriodDays | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD90.riskAverageLoanAmount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD90.riskMaxOverdueDays | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD90.riskOverdueLoanCount | FilterToTotal}}</td>
              <td>
                <compNoZero :checkData="morphoCardObj.riskD90.riskOverdueTenantCount" />
              </td>
              <td>{{morphoCardObj.riskD90.riskOverdueFor2TermTenantCount | FilterToTotal}}</td>
            </tr>
            <tr>
              <td>手机号维度</td>
              <td>{{morphoMobileObj.riskD90.riskQueryCount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD90.riskLoanCount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD90.riskLoanTenantCount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD90.riskAverageLoanGapDays | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD90.riskAverageTenantGapDays | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD90.riskMaxLoanAmount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD90.riskMaxLoanPeriodDays | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD90.riskAverageLoanAmount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD90.riskMaxOverdueDays | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD90.riskOverdueLoanCount | FilterToTotal}}</td>
              <td>
                <compNoZero :checkData="morphoMobileObj.riskD90.riskOverdueTenantCount" />
              </td>
              <td>{{morphoMobileObj.riskD90.riskOverdueFor2TermTenantCount | FilterToTotal}}</td>
            </tr>
          </tbody>
        </table>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>360天多头查询</dt>
      <dd>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>维度</th>
              <th>报告查询次数</th>
              <th>贷款笔数</th>
              <th>贷款机构数</th>
              <th>平均间隔时长</th>
              <th>平均换新机构间隔时长</th>
              <th>最大贷款金额(元)</th>
              <th>最大贷款天数</th>
              <th>平均贷款额度(元)</th>
              <th>最大逾期天数</th>
              <th>逾期贷款笔数</th>
              <th>逾期贷款机构数</th>
              <th>逾期2周期以上机构数</th>
              <th>最后一次贷款距今天数</th>
              <th>最早贷款距今月数</th>
              <th>最后一次逾期距今月数</th>
              <th>连续正常还款月数</th>
              <th>未还款总余额(元)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>身份证维度</td>
              <td>{{morphoCardObj.riskD360.riskQueryCount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskLoanCount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskLoanTenantCount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskAverageLoanGapDays | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskAverageTenantGapDays | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskMaxLoanAmount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskMaxLoanPeriodDays | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskAverageLoanAmount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskMaxOverdueDays | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskOverdueLoanCount | FilterToTotal}}</td>
              <td>
                <compNoZero :checkData="morphoCardObj.riskD360.riskOverdueTenantCount" />
              </td>
              <td>{{morphoCardObj.riskD360.riskOverdueFor2TermTenantCount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskDaysFromLastLoan | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskMonthsFromFirstLoan | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskMonthsFromLastOverdue | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskMonthsForNormalRepay | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskD360.riskRemainingAmount | FilterToTotal}}</td>
            </tr>
            <tr>
              <td>手机号维度</td>
              <td>{{morphoMobileObj.riskD360.riskQueryCount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskLoanCount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskLoanTenantCount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskAverageLoanGapDays | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskAverageTenantGapDays | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskMaxLoanAmount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskMaxLoanPeriodDays | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskAverageLoanAmount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskMaxOverdueDays | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskOverdueLoanCount | FilterToTotal}}</td>
              <td>
                <compNoZero :checkData="morphoMobileObj.riskD360.riskOverdueTenantCount" />
              </td>
              <td>{{morphoMobileObj.riskD360.riskOverdueFor2TermTenantCount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskDaysFromLastLoan | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskMonthsFromFirstLoan | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskMonthsFromLastOverdue | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskMonthsForNormalRepay | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskD360.riskRemainingAmount | FilterToTotal}}</td>
            </tr>
          </tbody>
        </table>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>历史多头查询</dt>
      <dd>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>维度</th>
              <th>贷款笔数</th>
              <th>最大逾期天数</th>
              <th>累计逾期次数</th>
              <th>未结清贷款笔数</th>
              <th>当前逾期的贷款笔数</th>
              <th>当前逾期的贷款机构数</th>
              <!-- <th>未还款总余额</th> -->
              <th>当前逾期金额</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>身份证维度</td>
              <td>{{morphoCardObj.riskAll.riskLoanCount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskAll.riskMaxOverdueDays | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskAll.riskOverdueCount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskAll.riskOpenLoanCount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskAll.riskOverdueLoanCount | FilterToTotal}}</td>
              <td>{{morphoCardObj.riskAll.riskOverdueTenantCount | FilterToTotal}}</td>
              <!-- <td>{{morphoCardObj.riskAll.riskRemainingAmount | FilterToTotal}}</td> -->
              <td>{{morphoCardObj.riskAll.riskRemainingOverdueAmount | FilterToTotal}}</td>
            </tr>
            <tr>
              <td>手机号维度</td>
              <td>{{morphoMobileObj.riskAll.riskLoanCount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskAll.riskMaxOverdueDays | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskAll.riskOverdueCount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskAll.riskOpenLoanCount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskAll.riskOverdueLoanCount | FilterToTotal}}</td>
              <td>{{morphoMobileObj.riskAll.riskOverdueTenantCount | FilterToTotal}}</td>
              <!-- <td>{{morphoMobileObj.riskAll.riskRemainingAmount | FilterToTotal}}</td> -->
              <td>{{morphoMobileObj.riskAll.riskRemainingOverdueAmount | FilterToTotal}}</td>
            </tr>
          </tbody>
        </table>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>黑名单查询</dt>
      <dd>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>维度</th>
              <th>黑名单类型</th>
              <th>近6个月黑名单机构数</th>
              <th>近6个月申请查询数</th>
              <th>最新入库距离天数</th>
              <th>最新欺诈/逾期状态</th>
              <th>近12个月欺诈/逾期状态</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>身份证维度</td>
              <td>
                <el-tag v-if="morphoObj.riskBlacklist.riskIdcard.riskAll.riskBlackLevel !== 'none'" type="danger" size="small">{{morphoObj.riskBlacklist.riskIdcard.riskAll.riskBlackLevel | FilterToFisk('riskBlackLevel')}}</el-tag>
                <span v-else>{{morphoObj.riskBlacklist.riskIdcard.riskAll.riskBlackLevel | FilterToFisk('riskBlackLevel')}}</span>
              </td>
              <td>{{morphoObj.riskBlacklist.riskIdcard.riskAll.riskLast6MTenantCount | FilterToTotal}}</td>
              <td>{{morphoObj.riskBlacklist.riskIdcard.riskAll.riskLast6MQueryCount | FilterToTotal}}</td>
              <td>{{morphoObj.riskBlacklist.riskIdcard.riskAll.riskLastConfirmAtDays | FilterToTotal}}</td>
              <td>{{morphoObj.riskBlacklist.riskIdcard.riskAll.riskLastConfirmStatus | FilterToFisk('riskConfirmStatus')}}</td>
              <td>{{morphoObj.riskBlacklist.riskIdcard.riskAll.riskLast12MMaxConfirmStatus | FilterToFisk('riskConfirmStatus')}}</td>
            </tr>
            <tr>
              <td>手机号维度</td>
              <td>
                <el-tag v-if="morphoObj.riskBlacklist.riskMobile.riskAll.riskBlackLevel !== 'none'" type="danger" size="small">{{morphoObj.riskBlacklist.riskMobile.riskAll.riskBlackLevel | FilterToFisk('riskBlackLevel')}}</el-tag>
                <span v-else>{{morphoObj.riskBlacklist.riskMobile.riskAll.riskBlackLevel | FilterToFisk('riskBlackLevel')}}</span>
              </td>
              <td>{{morphoObj.riskBlacklist.riskMobile.riskAll.riskLast6MTenantCount | FilterToTotal}}</td>
              <td>{{morphoObj.riskBlacklist.riskMobile.riskAll.riskLast6MQueryCount | FilterToTotal}}</td>
              <td>{{morphoObj.riskBlacklist.riskMobile.riskAll.riskLastConfirmAtDays | FilterToTotal}}</td>
              <td>{{morphoObj.riskBlacklist.riskMobile.riskAll.riskLastConfirmStatus | FilterToFisk('riskConfirmStatus')}}</td>
              <td>{{morphoObj.riskBlacklist.riskMobile.riskAll.riskLast12MMaxConfirmStatus | FilterToFisk('riskConfirmStatus')}}</td>
            </tr>
          </tbody>
        </table>
      </dd>
    </dl>
    <!-- <dl class="cardinfo">
      <dt>流量查询</dt>
      <dd>
        <el-row :gutter="60">
          <el-col :span="12">
            <p>身份证维度</p>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>子窗口大小</th>
                  <th>跨机构申请数</th>
                  <th>不同的手机数</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in morphoObj.riskVelocityCheck[0].riskIdcard[0].riskTimeScopes" v-bind:key="index">
                  <td>{{item.riskSubWindowSize}}</td>
                  <td>{{item.riskCrossTenantAppsNumber}}</td>
                  <td>{{item.riskMobileCount}}</td>
                </tr>
              </tbody>
            </table>
          </el-col>
          <el-col :span="12">
            <p>手机号维度</p>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>子窗口大小</th>
                  <th>跨机构申请数</th>
                  <th>不同的身份证号</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in morphoObj.riskVelocityCheck[0].riskMobile[0].riskTimeScopes" v-bind:key="index">
                  <td>{{item.riskSubWindowSize}}</td>
                  <td>{{item.riskCrossTenantAppsNumber}}</td>
                  <td>{{item.riskPidCount}}</td>
                </tr>
              </tbody>
            </table>
          </el-col>
        </el-row>
      </dd>
    </dl> -->
  </div>
</template>
<script>
let compNoZero = {
  render: function (h) {
    return (
      <span>
        {
          this.checkNum ? this.checkNum === 'danger' ? <el-tag size="small" type='danger'>{this.checkData}</el-tag> : <span>{this.checkNum}</span> : <span>{this.checkData}</span>
        }
      </span>
    )
  },
  props: ['checkData'],
  computed: {
    checkNum () {
      if (this.checkData) {
        if (this.checkData === -1) {
          return '无记录'
        } else if (this.checkData > 0) {
          return 'danger'
        } else {
          return this.checkData
        }
      }
      return ''
    }
  }
}
export default {
  components: {
    compNoZero
  },
  props: {
    morphoObj: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    morphoCardObj () {
      return this.morphoObj.riskLoanInfo.riskIdcard.riskAll.riskTimeScopes
    },
    morphoMobileObj () {
      return this.morphoObj.riskLoanInfo.riskMobile.riskAll.riskTimeScopes
    }
  },
  filters: {
    FilterToTotal (value) {
      return (value === -1 ? '无记录' : value)
    }
  }
}
</script>
