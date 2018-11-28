<template>
  <dl class="cardinfo">
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
                <th>跨机构申请机构数</th>
                <th>手机编码列表</th>
                <th>贷款类型列表</th>
                <th>机构行业列表</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in morObj.riskIdcard.riskSubWindows" v-bind:key="index">
                <td>{{item.riskSubWindowSize}} 天</td>
                <td>{{item.riskTotalAppsNumber}}</td>
                <td>{{item.riskCrossTenantAppsNumber}}</td>
                <td>{{item.riskMobiles}}</td>
                <td>{{item.riskLoanTypes | FilterToFisk('riskLoanTypes')}}</td>
                <td><span v-if="item.riskSubWindowSize === 180">{{morObj.riskIdcard.riskTenantTypes | FilterToFisk('riskTenantTypes')}}</span></td>
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
                <th>跨机构申请机构数</th>
                <th>身份证编码列表</th>
                <th>贷款类型列表</th>
                <th>机构行业列表</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in morObj.riskMobile.riskSubWindows" v-bind:key="index">
                <td>{{item.riskSubWindowSize}} 天</td>
                <td>{{item.riskTotalAppsNumber}}</td>
                <td>{{item.riskCrossTenantAppsNumber}}</td>
                <td>{{item.riskIdcards}}</td>
                <td>{{item.riskLoanTypes | FilterToFisk('riskLoanTypes')}}</td>
                <td><span v-if="item.riskSubWindowSize === 180">{{morObj.riskMobile.riskTenantTypes | FilterToFisk('riskTenantTypes')}}</span></td>
              </tr>
            </tbody>
          </table>
        </el-col>
      </el-row>
    </dd>
  </dl>
</template>
<script>

const riskTypes = {
  riskLoanTypes: [
    {
      name: 'payday_loan',
      value: '发薪日贷款'
    },
    {
      name: 'micro_loan',
      value: '小额'
    },
    {
      name: 'p2p',
      value: 'P2P'
    },
    {
      name: 'cf_edu',
      value: '消费金融-教育'
    },
    {
      name: 'cf_medical',
      value: '消费金融-医美'
    },
    {
      name: 'cf_rent',
      value: '消费金融-租房'
    },
    {
      name: 'cf_digital',
      value: '消费金融-数码'
    },
    {
      name: 'cf_car',
      value: '消费金融-买车'
    },
    {
      name: 'cf_deco',
      value: '消费金融-装修'
    },
    {
      name: 'cf_tour',
      value: '消费金融-旅游'
    },
    {
      name: 'cf_agri',
      value: '消费金融-农业'
    },
    {
      name: 'cf_others',
      value: '消费金融-其他'
    },
    {
      name: 'supply_chain',
      value: '供应链金融'
    },
    {
      name: 'leasing_company',
      value: '融资租赁'
    },
    {
      name: 'car_mortgage',
      value: '车辆抵押贷款'
    },
    {
      name: 'house_mortgage',
      value: '房贷'
    },
    {
      name: 'credit_card',
      value: '信用卡'
    },
    {
      name: 'balance_transfer',
      value: '信用卡代偿'
    },
    {
      name: 'others',
      value: '其他'
    }
  ],
  riskTenantTypes: [
    {
      name: 'P2P',
      value: 'P2P'
    },
    {
      name: 'ConsumerFinance',
      value: '消费金融'
    },
    {
      name: 'PaydayLoan',
      value: '现金贷'
    },
    {
      name: 'AutoFinance',
      value: '汽车金融'
    },
    {
      name: 'Bank',
      value: '银行'
    },
    {
      name: 'Insurance',
      value: '保险'
    },
    {
      name: 'MicroFinance',
      value: '小额贷款'
    },
    {
      name: 'BrokerageCompany',
      value: '证券公司'
    },
    {
      name: 'MutualFund',
      value: '基金'
    },
    {
      name: 'Trust',
      value: '信托'
    },
    {
      name: 'PaymentService',
      value: '支付机构'
    },
    {
      name: 'LeasingCompany',
      value: '融资租赁'
    },
    {
      name: 'Platform',
      value: '平台类'
    },
    {
      name: 'Others',
      value: '其他'
    }
  ]
}

export default {
  props: {
    morphoObj: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    morObj () {
      return this.morphoObj.riskIntelliCredit.riskVelocityCheck
    }
  },
  filters: {
    FilterToFisk: (value, type) => {
      if (typeof value !== 'undefined') {
        let str = []
        let mlist = riskTypes[type]
        let valArr = value.split(',')
        valArr.forEach((val, index) => {
          let arr = mlist.filter((item) => {
            return item.name === val
          })
          if (arr.length > 0) {
            str.push(arr[0].value)
          }
        })
        return str.join(' , ')
      }
    }
  }
}
</script>
