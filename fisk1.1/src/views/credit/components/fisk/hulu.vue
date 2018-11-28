<template>
  <div>
    <dl class="cardinfo">
      <dt>基本信息</dt>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6" v-if="huluObj.riskUserBasic"><span>年龄：</span><b v-if="huluObj.riskUserBasic">{{huluObj.riskUserBasic.riskAge}}</b></el-col>
          <el-col :span="6"><span>性别：</span><b>{{huluObj.riskUserBasic.riskGender}}</b></el-col>
          <el-col :span="6"><span>生日：</span><b>{{huluObj.riskUserBasic.riskBirthday}}</b></el-col>
          <el-col :span="6"><span>身份证是否有效：</span>
            <!-- <el-tag :type="fiskData['FISK_BLACKHULU'].riskData.riskUserBasic.riskIdcardValidate === 1 ? 'success' : 'danger'"> -->
              <b>{{huluObj.riskUserBasic.riskIdcardValidate === 1 ? '是' : '否'}}</b>
            <!-- </el-tag> -->
          </el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>身份证户籍省份：</span><b>{{huluObj.riskUserBasic.riskIdcardProvince}}</b></el-col>
          <el-col :span="6"><span>身份证户籍城市：</span><b>{{huluObj.riskUserBasic.riskIdcardCity}}</b></el-col>
          <el-col :span="6"><span>身份证户籍地区：</span><b>{{huluObj.riskUserBasic.riskIdcardRegion}}</b></el-col>
          <el-col :span="6"><span>手机运营商：</span><b>{{huluObj.riskUserBasic.riskPhoneOperator}}</b></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>手机归属省份：</span><b>{{huluObj.riskUserBasic.riskPhoneProvince}}</b></el-col>
          <el-col :span="6"><span>手机归属城市：</span><b>{{huluObj.riskUserBasic.riskPhoneCity}}</b></el-col>
          <el-col :span="6"><span>身份证号记录天数：</span><b>{{huluObj.riskUserBasic.riskRecordIdcardDays}}</b></el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>社交风险点</dt>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>葫芦分：</span>
            <template v-if="huluObj.riskSocialNetwork.riskSnScore">
              <el-tag v-if="snScore" size="small" :type="snScore"><b>{{huluObj.riskSocialNetwork.riskSnScore}}</b></el-tag>
              <b v-else>{{huluObj.riskSocialNetwork.riskSnScore}}</b>
            </template>
          </el-col>
          <el-col :span="6"><span>直接联系人：</span><b>{{huluObj.riskSocialNetwork.riskSnOrder1ContactsCnt}}</b></el-col>
          <el-col :span="6"><span>直接黑人：</span>
              <el-tag v-if="checkBlack" size="small" :type="checkBlack"><b>{{huluObj.riskSocialNetwork.riskSnOrder1BlacklistContactsCnt}}</b></el-tag>
              <b v-else>{{huluObj.riskSocialNetwork.riskSnOrder1BlacklistContactsCnt}}</b>
          </el-col>
          <el-col :span="6"><span>间接黑人：</span><b>{{huluObj.riskSocialNetwork.riskSnOrder2BlacklistContactsCnt}}</b></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>认识间接黑人联系人数：</span><b>{{huluObj.riskSocialNetwork.riskSnOrder2BlacklistRoutersCnt}}</b></el-col>
          <el-col :span="6"><span>间接黑人联系人比例：</span><b>{{huluObj.riskSocialNetwork.riskSnOrder2BlacklistRoutersPct}}</b></el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>黑名单</dt>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>身份证是否命中黑名单：</span>
            <compBlack :checkData="huluObj.riskBlacklist.riskIdcardInBlacklist" />
            <!-- <el-tag size="small" v-if="huluObj.riskBlacklist.riskIdcardInBlacklist" type="warning"><b>{{huluObj.riskBlacklist.riskIdcardInBlacklist ? '是' : '否'}}</b></el-tag>
            <b v-else>{{huluObj.riskBlacklist.riskIdcardInBlacklist ? '是' : '否'}}</b> -->
          </el-col>
          <el-col :span="6"><span>手机号是否命中黑名单：</span>
            <compBlack :checkData="huluObj.riskBlacklist.riskPhoneInBlacklist" />
            <!-- <b>{{huluObj.riskBlacklist.riskPhoneInBlacklist ? '是' : '否'}}</b> -->
          </el-col>
          <el-col :span="6"><span>是否命中法院黑名单：</span>
            <compBlack :checkData="huluObj.riskBlacklist.riskInCourtBlacklist" />
            <!-- <b>{{huluObj.riskBlacklist.riskInCourtBlacklist ? '是' : '否'}}</b> -->
          </el-col>
          <el-col :span="6"><span>是否命中网贷黑名单：</span>
            <compBlack :checkData="huluObj.riskBlacklist.riskInP2pBlacklist" />
            <!-- <b>{{huluObj.riskBlacklist.riskInP2pBlacklist ? '是' : '否'}}</b> -->
          </el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>是否命中银行黑名单：</span>
            <b>{{huluObj.riskBlacklist.riskInBankBlacklist ? '是' : '否'}}</b>
          </el-col>
          <el-col :span="6"><span>身份证在黑名单时间：</span><b>{{huluObj.riskBlacklist.riskLastAppearIdcardInBlacklist === '' ? '无' : huluObj.riskBlacklist.riskLastAppearIdcardInBlacklist}}</b></el-col>
          <el-col :span="6"><span>手机号在黑名单中时间：</span><b>{{huluObj.riskBlacklist.riskLastAppearPhoneInBlacklist === '' ? '无' : huluObj.riskBlacklist.riskLastAppearPhoneInBlacklist}}</b></el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>历史查询</dt>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>历史查询总次数：</span><b>{{huluObj.riskHistorySearch.riskSearchCnt}}</b></el-col>
          <el-col :span="6"><span>7天内查询次数：</span><b>{{huluObj.riskHistorySearch.riskSearchCntRecent7Days}}</b></el-col>
          <el-col :span="6"><span>14天内查询次数：</span><b>{{huluObj.riskHistorySearch.riskSearchCntRecent14Days}}</b></el-col>
          <el-col :span="6"><span>30天内查询次数：</span><b>{{huluObj.riskHistorySearch.riskSearchCntRecent30Days}}</b></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>60天内查询次数：</span><b>{{huluObj.riskHistorySearch.riskSearchCntRecent60Days}}</b></el-col>
          <el-col :span="6"><span>90天内查询次数：</span><b>{{huluObj.riskHistorySearch.riskSearchCntRecent90Days}}</b></el-col>
          <el-col :span="6"><span>180天内查询次数：</span><b>{{huluObj.riskHistorySearch.riskSearchCntRecent180Days}}</b></el-col>
          <el-col :span="6"><span>历史查询总机构数：</span><b>{{huluObj.riskHistorySearch.riskOrgCnt}}</b></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>7天内查询机构数：</span><b>{{huluObj.riskHistorySearch.riskOrgCntRecent7Days}}</b></el-col>
          <el-col :span="6"><span>14天内查询机构数：</span><b>{{huluObj.riskHistorySearch.riskOrgCntRecent14Days}}</b></el-col>
          <el-col :span="6"><span>30天内查询机构数：</span><b>{{huluObj.riskHistorySearch.riskOrgCntRecent30Days}}</b></el-col>
          <el-col :span="6"><span>60天内查询机构数：</span><b>{{huluObj.riskHistorySearch.riskOrgCntRecent60Days}}</b></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>90天内查询机构数：</span><b>{{huluObj.riskHistorySearch.riskOrgCntRecent90Days}}</b></el-col>
          <el-col :span="6"><span>180天内查询机构数：</span><b>{{huluObj.riskHistorySearch.riskOrgCntRecent180Days}}</b></el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>历史机构类型</dt>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>线上消费分期出现次数：</span><b>{{huluObj.riskHistoryOrg.riskOnlineInstallmentCnt}}</b></el-col>
          <el-col :span="6"><span>线下消费分期出现次数：</span><b>{{huluObj.riskHistoryOrg.riskOfflineInstallmentCnt}}</b></el-col>
          <el-col :span="6"><span>信用卡代还出现次数：</span><b>{{huluObj.riskHistoryOrg.riskCreditCardRepaymentCnt}}</b></el-col>
          <el-col :span="6"><span>小额快速贷出现次数：</span><b>{{huluObj.riskHistoryOrg.riskPaydayLoanCnt}}</b></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="6"><span>线上现金贷出现次数：</span><b>{{huluObj.riskHistoryOrg.riskOnlineCashLoanCnt}}</b></el-col>
          <el-col :span="6"><span>线下现金贷出现次数：</span><b>{{huluObj.riskHistoryOrg.riskOfflineCashLoanCnt}}</b></el-col>
          <el-col :span="6"><span>其它：</span><b>{{huluObj.riskHistoryOrg.riskOthers_cnt}}</b></el-col>
        </el-row>
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
          this.checkData ? <el-tag size="small" type="warning"><b>{this.checkData ? '是' : '否'}</b></el-tag> : <b>{this.checkData ? '是' : '否'}</b>
        }
      </span>
    )
  },
  props: ['checkData']
}
export default {
  components: {
    compBlack
  },
  props: {
    huluObj: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    snScore () {
      let snScore = this.huluObj.riskSocialNetwork.riskSnScore
      if (snScore) {
        if (snScore < 10) {
          return 'warning'
        }
      } else {
        return ''
      }
    },
    checkBlack () {
      let black = this.huluObj.riskSocialNetwork.riskSnOrder1BlacklistContactsCnt
      if (black) {
        if (black > 0) {
          return 'danger'
        }
      } else {
        return ''
      }
    }
  }
}
</script>
