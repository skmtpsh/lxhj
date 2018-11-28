<template>
  <div>
    <spinner :visible="loading.SCHOOL" :fixed="true" :text="loading.loaddingMsg"></spinner>
    <blockquote class="quote" id="dianshang">学信网信息</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }" v-if="opObj.data_list.length > 0">
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit" id="dianshang"><svg-icon icon-class="play_fill" /> <b>用户信息</b></div>
      </div>
      <dl class="cardinfo">
        <dd>
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>账号</th>
              <th>姓名</th>
              <th>区域</th>
              <th>身份证类型</th>
              <th>身份证</th>
              <th>手机号</th>
              <th>邮箱</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="opObj.data_list.length > 0">
              <td>{{opObj.data_list[0].user_info.account}}</td>
              <td>{{opObj.data_list[0].user_info.name}}</td>
              <td>{{opObj.data_list[0].user_info.region}}</td>
              <td>{{opObj.data_list[0].user_info.card_type}}</td>
              <td>{{opObj.data_list[0].user_info.card_no}}</td>
              <td>{{opObj.data_list[0].user_info.cellphone_number}}</td>
              <td>{{opObj.data_list[0].user_info.safe_mailbox}}</td>
            </tr>
            </tbody>
          </table>
        </dd>
      </dl>
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }" v-if="opObj.data_list.length === 0">
      <dl class="cardinfo">
        <dd><p>未认证</p></dd>
      </dl>
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }" v-if="opObj.data_list.length > 0">
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit" id="dianshang"><svg-icon icon-class="play_fill" /> <b>学历信息</b></div>
      </div>
      <dl class="cardinfo"  v-if="opObj.data_list.length > 0">
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>学历信息编号:</b> {{opObj.data_list[0].edu_info[0].edu_info_id}}</el-col>
            <el-col :span="8"><b>姓名:</b> {{opObj.data_list[0].edu_info[0].name}}</el-col>
            <el-col :span="8"><b>性别:</b> {{opObj.data_list[0].edu_info[0].sex}}</el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>出生日期:</b> {{opObj.data_list[0].edu_info[0].stu_info_id}}</el-col>
            <el-col :span="8"><b>入学日期:</b> {{opObj.data_list[0].edu_info[0].admission_date}}</el-col>
            <el-col :span="8"><b>毕(结)业日期:</b> {{opObj.data_list[0].edu_info[0].graduation_date}}</el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>学历类别:</b> {{opObj.data_list[0].edu_info[0].education_category}}</el-col>
            <el-col :span="8"><b>学历层次:</b> {{opObj.data_list[0].edu_info[0].education_level}}</el-col>
            <el-col :span="8"><b>学校名称:</b> {{opObj.data_list[0].edu_info[0].graduated_school}}</el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>院校所在地:</b> {{opObj.data_list[0].edu_info[0].college_location}}</el-col>
            <el-col :span="8"><b>专业名称:</b> {{opObj.data_list[0].edu_info[0].major}}</el-col>
            <el-col :span="8"><b>学习形式:</b> {{opObj.data_list[0].edu_info[0].learning_form}}</el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>证书编号:</b> {{opObj.data_list[0].edu_info[0].certificate_no}}</el-col>
            <el-col :span="8"><b>毕(结)业结论:</b> {{opObj.data_list[0].edu_info[0].conclusion_graduation}}</el-col>
          </el-row>
        </dd>
      </dl>
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }" v-if="opObj.data_list.length > 0">
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit" id="dianshang"><svg-icon icon-class="play_fill" /> <b>学籍信息</b></div>
      </div>
      <dl class="cardinfo"  v-if="opObj.data_list.length > 0">
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>学生信息ID:</b> {{opObj.data_list[0].stu_info[0].stu_info_id}}</el-col>
            <el-col :span="8"><b>姓名:</b> {{opObj.data_list[0].stu_info[0].name}}</el-col>
            <el-col :span="8"><b>性别:</b> {{opObj.data_list[0].stu_info[0].sex}}</el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>民族:</b> {{opObj.data_list[0].stu_info[0].nation}}</el-col>
            <el-col :span="8"><b>出生日期:</b> {{opObj.data_list[0].stu_info[0].birthday}}</el-col>
            <el-col :span="8"><b>身份证号:</b> {{opObj.data_list[0].stu_info[0].id_number}}</el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>分院:</b> {{opObj.data_list[0].stu_info[0].branch_school}}</el-col>
            <el-col :span="8"><b>学生编号:</b> {{opObj.data_list[0].stu_info[0].student_number}}</el-col>
            <el-col :span="8"><b>学校名称:</b> {{opObj.data_list[0].stu_info[0].school_name}}</el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>学籍状况:</b> {{opObj.data_list[0].stu_info[0].state_school}}</el-col>
            <el-col :span="8"><b>系:</b> {{opObj.data_list[0].stu_info[0].correspondence_station}}</el-col>
            <el-col :span="8"><b>专业:</b> {{opObj.data_list[0].stu_info[0].major}}</el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>班级:</b> {{opObj.data_list[0].stu_info[0].class_number}}</el-col>
            <el-col :span="8"><b>层次:</b> {{opObj.data_list[0].stu_info[0].education_level}}</el-col>
            <el-col :span="8"><b>学制:</b> {{opObj.data_list[0].stu_info[0].schooling_length}}</el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>学历类别:</b> {{opObj.data_list[0].stu_info[0].education_category}}</el-col>
            <el-col :span="8"><b>学习形式:</b> {{opObj.data_list[0].stu_info[0].learning_form}}</el-col>
            <el-col :span="8"><b>入学日期:</b> {{opObj.data_list[0].stu_info[0].admission_date}}</el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="8"><b>毕业日期:</b> {{opObj.data_list[0].stu_info[0].leaving_date}}</el-col>
            <el-col :span="8"><b></b></el-col>
          </el-row>
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
        SCHOOL: false
      },
      fiskData: {
        SCHOOL: {
          data_list: []
        }
      }
    }
  },
  computed: {
    opObj () {
      if (this.fiskData.SCHOOL) {
        return this.fiskData['SCHOOL']
      }
      return {}
    }
  },
  methods: {
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
      'SCHOOL'
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
    this.loading.SCHOOL = true
    axios.all(reqArrFun)
      .then(axios.spread((...allResonse) => {
        this.loading.SCHOOL = false
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
