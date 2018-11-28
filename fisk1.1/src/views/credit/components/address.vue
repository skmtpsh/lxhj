<template>
  <div>
    <spinner :visible="loading.CONTACTS" :fixed="true" :text="loading.loaddingMsg"></spinner>
    <blockquote class="quote" id="address">通讯录</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <dl class="cardinfo">
        <dd>
          <el-table
            header-row-class-name='headclass'
            :data="fiskData['CONTACTS'].contactList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="姓名">
              <template slot-scope="scope">
                <el-tag v-if="checkName(scope.row.name)" size="small" type="danger">{{scope.row.name}}</el-tag>
                <span v-else>{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="mobile"
              label="联系电话">
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="slot, prev, pager, next"
            @current-change="handleCurrentChange"
            v-if="fiskData['CONTACTS'].contactListSize"
            :page-size="pagesize"
            :total="fiskData['CONTACTS'].contactListSize">
            <el-tag v-if="fiskData['CONTACTS'].contactListSize < 30" type="warning" size="small">共 {{fiskData['CONTACTS'].contactListSize}} 条</el-tag>
            <span class="el-pagination__total" v-else>共 {{fiskData['CONTACTS'].contactListSize}} 条</span>
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
        CONTACTS: false
      },
      fiskData: {
        CONTACTS: {
          contactList: []
        }
      }
    }
  },
  methods: {
    checkName (name) {
      if (name) {
        let arrTxt = ['金融中介', '律师', '新闻媒体', '中介', '贷款']
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
          if (response.data.code === 200) {
            this.fiskData[type] = response.data.datas
          } else {
            console.log(response.data.message)
          }
        })
        .catch((error) => {
          this.loading[type] = false
          console.log(error)
        })
    }
  },
  beforeMount () {
    let allRequest = [
      'CONTACTS'
    ]
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
    // set function fisk.js request
    let reqArrFun = allRequest.map((item) => {
      return baseApi[item](this.params)
    })
    this.loading.CONTACTS = true
    axios.all(reqArrFun)
      .then(axios.spread((...allResonse) => {
        this.loading.CONTACTS = false
        // set data
        for (let [i, item] of new Map(allResonse.map((item, i) => [i, item]))) {
          if (item.data.code === 200) {
            this.$set(this.fiskData, allRequest[i], item.data.datas)
            if (!item.data.datas.contactList) { // 接口返回 {contactListSize: 0} 补一个数组
              this.fiskData.CONTACTS.contactList = []
            }
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
<style lang="scss" scoped>
</style>
