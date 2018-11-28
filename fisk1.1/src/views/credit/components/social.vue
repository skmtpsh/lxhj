<template>
  <div>
    <spinner :visible="loading.SOCIAL" :fixed="true" :text="loading.loaddingMsg"></spinner>
    <blockquote class="quote" id="dianshang">社保</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }" v-if="opObj.data_list[0].user">
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit" id="dianshang"><svg-icon icon-class="play_fill" /> <b>用户信息</b></div>
      </div>
      <dl class="cardinfo">
        <dd>
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>出生日期</th>
              <th>民族</th>
              <th>身份证号</th>
              <th>姓名</th>
              <th>性别</th>
              <th>社保编号</th>
              <th>社保城市</th>
              <th>手机号</th>
              <th>缴纳单位名称</th>
              <th>单位机构码</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="opObj.data_list.length > 0">
              <td>{{opObj.data_list[0].user.birthday}}</td>
              <td>{{opObj.data_list[0].user.nation}}</td>
              <td>{{opObj.data_list[0].user.id_card}}</td>
              <td>{{opObj.data_list[0].user.real_name}}</td>
              <td>{{opObj.data_list[0].user.sex}}</td>
              <td>{{opObj.data_list[0].user.insure_code}}</td>
              <td>{{opObj.data_list[0].user.insure_city}}</td>
              <td>{{opObj.data_list[0].user.cellphone}}</td>
              <td>{{opObj.data_list[0].user.com_name}}</td>
              <td>{{opObj.data_list[0].user.com_code}}</td>
            </tr>
            </tbody>
          </table>
        </dd>
      </dl>
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }" v-if="opObj.data_list[0].user===''">
      <dl class="cardinfo">
        <dd><p>未认证</p></dd>
      </dl>
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }" v-if="opObj.data_list[0].flow.length > 0">
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit" id="dianshang"><svg-icon icon-class="play_fill" /> <b>流水</b></div>
      </div>
      <dl class="cardinfo">
        <dd>
          <el-table
            v-if="opObj.data_list.length > 0 && opObj.data_list[0].flow.length > 0"
            header-row-class-name='headclass'
            :data="opObj.data_list[0].flow.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            style="width: 100%">
            <el-table-column
              prop="id_card"
              label="身份证号">
            </el-table-column>
            <el-table-column
              prop="com_name"
              label="缴费单位">
            </el-table-column>
            <el-table-column
              prop="pay_type"
              label="缴费类型">
              <template slot-scope="scope">
                <span>{{scope.row.pay_type}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="end_date"
              label="汇缴结束日期">
            </el-table-column>
            <el-table-column
              prop="start_date"
              label="汇缴起始日期">
            </el-table-column>
            <el-table-column
              prop="pay_date"
              label="交易日期">
            </el-table-column>
            <el-table-column
              prop="base_rmb"
              label="缴费基数">
            </el-table-column>
            <el-table-column
              prop="per_rmb"
              label="个人缴费">
            </el-table-column>
            <el-table-column
              prop="month_rmb"
              label="变动金额">
            </el-table-column>
            <!-- <el-table-column
              prop="flow_type"
              label="险种">
            </el-table-column>
            <el-table-column
              prop="com_rmb"
              label="单位缴费">
            </el-table-column>
            <el-table-column
              prop="balance_rmb"
              label="余额">
            </el-table-column> -->
          </el-table>
          <el-pagination
            v-if="opObj.data_list.length > 0 && opObj.data_list[0].flow.length > 0"
            background
            layout="total, prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="pagesize"
            :total="opObj.data_list[0].flow.length">
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
export default {
  components: {
    Spinner
  },
  data () {
    return {
      pagesize: 15,
      currentPage: 1,
      loading: {
        loaddingMsg: '',
        SOCIAL: false
      },
      fiskData: {
        SOCIAL: {
          data_list: [{
            flow: [],
            user: ''
          }]
        }
      }
    }
  },
  computed: {
    opObj () {
      if (this.fiskData.SOCIAL) {
        return this.fiskData.SOCIAL
      }
      return {}
    }
  },
  methods: {
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
      'SOCIAL'
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
    this.loading.SOCIAL = true
    axios.all(reqArrFun)
      .then(axios.spread((...allResonse) => {
        this.loading.SOCIAL = false
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
