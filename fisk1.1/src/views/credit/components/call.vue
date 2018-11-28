<template>
  <div>
    <spinner :visible="loading.OPERATOR" :fixed="true" :text="loading.loaddingMsg"></spinner>
    <blockquote class="quote">紧急联系人分析</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <dl class="cardinfo">
        <dd>
          <el-table
            v-if="opObj.call_log"
            header-row-class-name='headclass'
            :data="opObj.emergency_analysis"
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="联系人信息"
              width="100">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="与本人关系"
              width="100">
              <template slot-scope="scope">
                <span>{{scope.row.phone | FilterRelation(opObj.input_info.emergency_info)}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="通讯录备注"
              width="120">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="手机号"
              width="100">
            </el-table-column>
            <el-table-column
              prop="phone_info"
              label="网络标识"
              width="100">
            </el-table-column>
            <el-table-column
              prop="last_contact_date"
              label="最后联系时间"
              width="150">
              <!-- <template slot-scope="scope">
                <span>{{scope.row.last_contact_date | FilterTime}}</span>
              </template> -->
            </el-table-column>
            <el-table-column
              prop="talk_seconds"
              label="半年通话时间"
              width="120">
            </el-table-column>
            <el-table-column
              prop="first_contact_date"
              label="首次联系时间"
              width="150">
              <!-- <template slot-scope="scope">
                <span>{{scope.row.first_contact_date | FilterTime}}</span>
              </template> -->
            </el-table-column>
            <el-table-column
              label="其它" >
              <template slot-scope="scope">
                <el-tag size="small" :type="checkCall(scope.row.call_cnt)">主叫次数 {{scope.row.call_cnt}}</el-tag>
                <el-tag size="small" :type="checkCall(scope.row.called_cnt)">被叫次数 {{scope.row.called_cnt}}</el-tag>
                短信 {{scope.row.msg_cnt}}
              </template>
            </el-table-column>
          </el-table>
          <!-- <el-pagination
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="pagesize"
            :total="opObj.emergency_analysis.length">
          </el-pagination> -->
        </dd>
      </dl>
    </el-card>
    <blockquote class="quote">通话记录(存在于通讯录的数量：<span>{{checkRecords.total}}</span>，通讯录：<span>{{checkRecords.has}}</span>)</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <dl class="cardinfo">
        <dd>
          <el-table
            v-if="opObj.call_log"
            header-row-class-name='headclass'
            :data="opObj.call_log.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            stripe
            style="width: 100%">
            <el-table-column
              prop="phone"
              label="号码">
            </el-table-column>
            <el-table-column
              prop="callName"
              label="通讯录匹配">
              <template slot-scope="scope">
                <el-tag type="success" v-if="scope.row.callName !== ''" size="small"> {{scope.row.callName | FilterToCallName}} </el-tag>
                <el-tag v-if="checkName(scope.row.callName)" size="small" type="danger">{{scope.row.callName}}</el-tag>
                <span v-else>{{scope.row.callName}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="phone_info"
              label="互联网标识">
              <template slot-scope="scope">
                <el-tag v-if="checkName(scope.row.phone_info)" size="small" type="danger">{{scope.row.phone_info}}</el-tag>
                <span v-else>{{scope.row.phone_info}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="phone_location"
              label="号码归属">
            </el-table-column>
            <el-table-column
              prop="last_contact_date"
              label="最后联系"
              width="150">
            </el-table-column>
            <el-table-column
              prop="talk_cnt"
              label="通话次数"
              width="150">
              <template slot-scope="scope">
                <comp-show-cnt :check-data="scope" :current="currentPage" :firstData="firstData"></comp-show-cnt>
              </template>
            </el-table-column>
            <el-table-column
              label="主叫情况">
              <template slot-scope="scope">
                {{scope.row.call_cnt}} 次, {{scope.row.call_seconds | FilterToMinit}} 分
              </template>
            </el-table-column>
            <el-table-column
              label="被叫情况">
              <template slot-scope="scope">
                {{scope.row.called_cnt}} 次, {{scope.row.called_seconds | FilterToMinit}} 分
              </template>
            </el-table-column>
            <el-table-column
              prop="contact_1w"
              label="一周">
            </el-table-column>
            <el-table-column
              prop="contact_1m"
              label="一月">
            </el-table-column>
            <el-table-column
              prop="contact_3m"
              label="三月">
            </el-table-column>
          </el-table>
          <el-pagination
            v-if="opObj.call_log && opObj.call_log.length"
            background
            layout="total, prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="pagesize"
            :total="opObj.call_log.length">
          </el-pagination>
        </dd>
      </dl>
    </el-card>
  </div>
</template>
<script>
import Spinner from '@/components/spinner'
import baseApi from '@/api/credit/baseinfo'
import axios from 'axios'

let compShowCnt = {
  render: function (h) {
    return (
      <span>
        {
          this.checkNum ? <el-tag size="small" disable-transitions type='warning'>{this.checkData.row.talk_cnt}</el-tag> : this.checkData.row.talk_cnt
        }
      </span>
    )
  },
  props: ['checkData', 'current', 'firstData'],
  computed: {
    checkNum () {
      let scop = this.checkData
      if (this.current === 1 && scop.$index <= 2 && this.firstData.length > 3) {
        if (this.firstData[2].talk_cnt) {
          if (this.firstData[2].talk_cnt === scop.row.talk_cnt && scop.row.talk_cnt <= 20) {
            return true
          } else {
            return false
          }
        }
        return false
      }
      return false
    }
  }
}

export default {
  components: {
    Spinner,
    compShowCnt
  },
  data () {
    return {
      pagesize: 15,
      currentPage: 1,
      loading: {
        loaddingMsg: '',
        OPERATOR: false
      },
      fiskData: {
        OPERATOR: {
          tianji_api_tianjireport_detail_response: {
            call_log: [],
            emergency_analysis: []
          }
        }
      }
    }
  },
  computed: {
    firstData () {
      if (this.currentPage === 1) {
        return this.opObj.call_log.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
      }
      return []
    },
    opObj () {
      if (this.fiskData.OPERATOR) {
        return this.fiskData.OPERATOR.tianji_api_tianjireport_detail_response
      }
      return {}
    },
    checkRecords () {
      let tempObj = {
        total: 0,
        has: ''
      }
      if (this.fiskData.OPERATOR) {
        this.opObj.call_log.forEach((item) => {
          if (item.callName !== '') {
            tempObj.total++
          }
        })
        if (tempObj.total > 0) {
          tempObj.has = '有'
        } else {
          tempObj.has = '无'
        }
      }
      return tempObj
    }
  },
  filters: {
    FilterToCallName (value) {
      return value !== '' ? '是' : ''
    },
    FilterRelation (value, arr) {
      let relation = ''
      if (value && arr) {
        arr.forEach((item) => {
          if (item.phone === value) {
            relation = item.relation
          }
        })
      }
      return relation
    }
  },
  methods: {
    checkCall (cnt) {
      if (cnt && cnt > 0) {
        return 'success'
      } else {
        return 'danger'
      }
    },
    checkName (name) {
      if (name) {
        let arrTxt = ['金融中介', '律师', '新闻媒体']
        return arrTxt.some((txt) => {
          let regtxt = new RegExp(txt, 'g')
          return regtxt.test(name)
        })
      }
      return false
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    },
    getRefresh (type) {
      this.loading[type] = true
      baseApi[type](this.params)
        .then((response) => {
          this.loading[type] = false
          if (response.data.code === 200 && response.data.datas) {
            this.fiskData[type] = response.data.datas
          } else {
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  beforeMount () {
    let allRequest = [
      'OPERATOR'
    ]
    // Loading
    // Define Params
    let querys = this.$route.query
    if (!querys) {
      this.$message({
        message: '参数不正确',
        type: 'warning'
      })
    }
    this.params = querys
    // 备用方案二
    // allRequest.forEach((item) => {
    //   this.getRefresh(item)
    // })

    // 备用方案一
    // let allRequestMap = allRequest.map((item) => item)
    // set function fisk.js request
    let reqArrFun = allRequest.map((item) => {
      return baseApi[item](this.params)
    })
    this.loading.OPERATOR = true
    axios.all(reqArrFun)
      .then(axios.spread((...allResonse) => {
        this.loading.OPERATOR = false
        // set data
        for (let [i, item] of new Map(allResonse.map((item, i) => [i, item]))) {
          if (item.data.code === 200 && item.data.datas) {
            this.$set(this.fiskData, allRequest[i], item.data.datas)
          } else {
            console.log('interator:' + allRequest[i] + ' msg:' + item.data.message)
          }
        }
      })).catch((error) => {
        console.log(error)
      })
  }
}
</script>
