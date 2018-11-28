<template>
  <div>
    <dl class="cardinfo">
      <dt>淘宝信息</dt>
      <dd>
          <el-row :gutter="60">
            <el-col :span="5"><span>登录名：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskLoginName}}</b></el-col>
            <el-col :span="5"><span>昵称：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskNickName}}</b></el-col>
            <el-col :span="5"><span>性别：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskGender}}</b></el-col>
            <el-col :span="4"><span>生日：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskBirthday}}</b></el-col>
            <el-col :span="5"><span>绑定的email：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskEmail}}</b></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="5"><span>绑定的手机号：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskMobile}}</b></el-col>
          <el-col :span="5"><span>会员级别：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskVipGrowthLevel}}</b></el-col>
          <el-col :span="5"><span>会员成长值：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskVipGrowthNumber}}</b></el-col>
          <el-col :span="4"><span>安全级别：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskSafeLevel}}</b></el-col>
          <el-col :span="5"><span>认证时间：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskRealCheckTime}}</b></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="5"><span>认证身份证：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskBoundCertNo}}</b></el-col>
          <el-col :span="5"><span>认证姓名：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskBoundName}}</b></el-col>
          <el-col :span="5"><span>是否实名制：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskIsRealCheck}}</b></el-col>
          <el-col :span="9"><span>实名认证渠道：</span><b>{{baiTaobaoObj.riskPersonalInfo.riskBoundWay}}</b></el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>支付宝信息</dt>
      <dd>
        <el-row :gutter="60">
          <el-col :span="5"><span>用户名：</span><b>{{baiTaobaoObj.riskZhifubaoInfo.riskUserName}}</b></el-col>
          <el-col :span="5"><span>身份证号：</span><b>{{baiTaobaoObj.riskZhifubaoInfo.riskIdentityCard}}</b></el-col>
          <el-col :span="5"><span>绑定手机号：</span><b>{{baiTaobaoObj.riskZhifubaoInfo.riskBoundMobile}}</b></el-col>
          <el-col :span="5"><span>账号类型：</span><b>{{baiTaobaoObj.riskZhifubaoInfo.riskAccountType}}</b></el-col>
          <el-col :span="4"><span>账户余额(元)：</span><b>{{baiTaobaoObj.riskZhifubaoInfo.riskAccountBalanceAmount}}</b></el-col>
        </el-row>
      </dd>
      <dd>
        <el-row :gutter="60">
          <el-col :span="5"><span>绑定邮箱：</span><b>{{baiTaobaoObj.riskZhifubaoInfo.riskBoundEmail}}</b></el-col>
          <el-col :span="5"><span>余额宝总资产(元)：</span><b>{{baiTaobaoObj.riskZhifubaoInfo.riskYebBalanceAmount}}</b></el-col>
          <el-col :span="5"><span>累计收益(元)：</span><b>{{baiTaobaoObj.riskZhifubaoInfo.riskAccumulatedIncome}}</b></el-col>
          <el-col :span="5"><span>花呗总金额(元)：</span><b>{{baiTaobaoObj.riskZhifubaoInfo.riskHuabeiTotalAmount}}</b></el-col>
          <el-col :span="4"><span>花呗可用额度(元)：</span><b>{{baiTaobaoObj.riskZhifubaoInfo.riskHuabeiAvailableAmount}}</b></el-col>
        </el-row>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>淘宝订单信息</dt>
      <dd>
        <el-table
          v-if="baiTaobaoOrderObj"
          header-row-class-name='headclass'
          :data="baiTaobaoOrderObj"
          style="width: 100%">
          <el-table-column
            prop="month"
            label="订单创建时间">
          </el-table-column>
          <el-table-column
            prop="status1"
            label="完成订单数">
          </el-table-column>
          <el-table-column
            prop="status2"
            label="已取消订单数">
          </el-table-column>
          <el-table-column
            prop="status3"
            label="代收货订单数">
          </el-table-column>
        </el-table>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>已完成订单信息</dt>
      <dd>
        <el-table
          v-if="baiTaobaoOrderObj"
          header-row-class-name='headclass'
          :data="baiTaobaoOrderObj"
          style="width: 100%">
          <el-table-column
            prop="month"
            label="订单创建时间">
          </el-table-column>
          <el-table-column
            prop="ordertotal"
            label="订单数总数">
          </el-table-column>
          <el-table-column
            prop="amonttotal"
            label="订单数总金额(元)">
          </el-table-column>
          <el-table-column
            prop="info"
            label="商品类型说明">
            <template slot-scope="scope">
              <span>{{scope.row.info | FilterToInfo}}</span>
            </template>
          </el-table-column>
        </el-table>
      </dd>
    </dl>
    <dl class="cardinfo">
      <dt>收货地址</dt>
      <dd>
        <el-table
          header-row-class-name='headclass'
          :data="baiTaobaoObj.riskReceiveAddresses"
          style="width: 100%">
          <el-table-column
            prop="riskIsDefault"
            label="默认地址"
            width="80">
            <template slot-scope="scope">
              <span>{{scope.row.riskIsDefault === false ? "否" : "是"}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="riskReceivePersonalName"
            label="收货人姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="riskarea"
            label="所在地区">
          </el-table-column>
          <el-table-column
            prop="riskAddress"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="riskMobile"
            label="手机号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="riskPhone"
            label="固定号码"
            width="100">
          </el-table-column>
          <el-table-column
            prop="riskEmail"
            label="邮箱"
            width="100">
          </el-table-column>
        </el-table>
      </dd>
    </dl>
  </div>
</template>
<script>
import * as utils from '@/utils/common'
import moment from 'moment'

export default {
  props: ['taobaoObj'],
  computed: {
    baiTaobaoObj () {
      return this.taobaoObj.riskDetailInfo
    },
    baiTaobaoOrderObj () {
      let tempData = this.taobaoObj.riskDetailInfo.riskOrderDetails
      let tempArr = tempData.map((item, index) => {
        return moment(item.riskCreateTime).format('YYYYMM')
      })
      let tempMonth = Array.from(new Set(tempArr)).sort((a, b) => {
        return b - a
      })
      let tempNewData = []
      tempMonth.forEach((month) => {
        let t = {
          month: '',
          status1: 0,
          status2: 0,
          status3: 0,
          ordertotal: 0,
          amonttotal: 0,
          info: []
        }
        t.month = moment(month + '01').format('YYYY-MM')
        tempData.forEach((item, index) => {
          if (moment(item.riskCreateTime).format('YYYYMM') === month) {
            // console.log('month', month, moment(item.riskCreateTime).format('YYYYMM'), item.riskStatus, t.amonttotal, item.riskPayInfo.riskAllMoney)
            if ((item.riskStatus) === '完成') {
              t.status1++
              t.ordertotal = t.ordertotal + 1
              t.amonttotal = utils.add(t.amonttotal, item.riskPayInfo.riskAllMoney).toFixed(2)
              // t.amonttotal = utils.add(t.amonttotal, item.riskPayInfo.riskAllMoney)
              t.info.push(item.riskItemInfos[0].riskLevel1Name)
            }
            if ((item.riskStatus) === '已取消') {
              t.status2++
            }
            if ((item.riskStatus).replace(' ', '') === '待收货') {
              t.status3++
            }
          }
        })
        tempNewData.push(t)
      })
      return tempNewData
    }
  },
  filters: {
    FilterToInfo (value) {
      return Array.from(new Set(value)).join(',')
    }
  }
}
</script>
