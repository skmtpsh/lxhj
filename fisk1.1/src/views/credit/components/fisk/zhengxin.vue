<template>
  <dl class="cardinfo">
    <dt>历史机构查询</dt>
    <dd>
      <el-row :gutter="60">
        <el-col :span="5">拒贷次数：{{zhengxinStatic.judai}}</el-col>
        <el-col :span="5">批款已放款次数：{{zhengxinStatic.pikuan}}</el-col>
        <el-col :span="5">待放款次数：{{zhengxinStatic.daifang}}</el-col>
        <el-col :span="5">借款人放弃申请次数：{{zhengxinStatic.jiekuan}}</el-col>
        <el-col :span="4">总申请次数：{{zhengxinStatic.count}}</el-col>
      </el-row>
    </dd>
    <dd>
      <el-table
        header-row-class-name='headclass'
        :data="zhengxinObj.riskLoanInfos"
        style="width: 100%">
        <el-table-column
          prop="riskCompanyCode"
          label="机构代码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="riskBorrowType"
          label="借款类型"
          width="180">
          <template slot-scope="scope">
            <span>{{scope.row.riskBorrowType | FilterToFisk('loanTypeCode')}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="riskBorrowState"
          label="借款状态">
          <template slot-scope="scope">
            <span>{{scope.row.riskBorrowState | FilterToFisk('loanStateCode')}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="riskBorrowAmount"
          label="借款金额(万元)">
          <template slot-scope="scope">
            <span>{{scope.row.riskBorrowAmount | FilterToAmount}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="riskLoanPeriod"
          label="借款期数">
        </el-table-column>
        <el-table-column
          prop="riskContractDate"
          label="借款时间">
          <template slot-scope="scope">
            <span>{{scope.row.riskContractDate | FilterTime}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="riskRepayState"
          label="还款状态">
          <template slot-scope="scope">
            <el-tag v-if="checkNum(scope.row.riskRepayState)" :type="checkNum(scope.row.riskRepayState)" size="small">{{scope.row.riskRepayState | FilterToFisk('riskRepayState')}}</el-tag>
            <span v-else>{{scope.row.riskRepayState | FilterToFisk('riskRepayState')}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="riskArrearsAmount"
          label="未还金额(元)">
        </el-table-column>
      </el-table>
    </dd>
  </dl>
</template>
<script>
export default {
  methods: {
    checkNum (val) {
      if (val) {
        if (/^[1-8]$/.test(val)) {
          if (/^[2-8]$/.test(val)) {
            return 'danger'
          } else if (val === 1) {
            return 'warning'
          }
        } else {
          return false
        }
      }
      return false
    }
  },
  filters: {
    FilterToAmount (value) {
      if (typeof value === 'number') {
        let amountMap = new Map([
          ['-7', '[0,0.1)'],
          ['-6', '[0.1,0.2)'],
          ['-5', '[0.2,0.3)'],
          ['-4', '[0.3,0.4)'],
          ['-3', '[0.4,0.6)'],
          ['-2', '[0.6,0.8)'],
          ['-1', '[0.8,1)'],
          ['0', '未知'],
          ['1', '[1,2)']
        ])
        for (let [key, val] of amountMap) {
          if (key === String(value)) {
            return val
          }
        }
        if (value >= 2) {
          return '[' + (2 * value - 2) + ', ' + (value * 2) + ')'
        }
        return value
      }
      return ''
    }
  },
  props: {
    zhengxinObj: {
      type: Object,
      default: () => {}
    },
    zhengxinStatic: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
