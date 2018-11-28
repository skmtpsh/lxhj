<template>
  <div id="operator">
    <spinner :visible="loading.OPERATOR" :fixed="true" :text="loading.loaddingMsg"></spinner>
    <el-row :gutter="60">
      <el-col :span="24">
          <div class="boxtip"><i class="el-icon-time"></i> 运营商报告统计周期：( {{opObj.user_portrait.silent_days.start_day}} 至 {{opObj.user_portrait.silent_days.end_day}})</div>
      </el-col>
    </el-row>
    <el-row :gutter="60">
      <el-col :span="12">
        <blockquote class="quote" id="dianshang">个人信息</blockquote>
        <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
          <dl class="cardinfo">
            <dd>
              <el-row :gutter="60">
                <el-col :span="10">
                  <b>检查项目</b>
                </el-col>
                <el-col :span="14">
                  <b>检查结果</b>
                </el-col>
              </el-row>
            </dd>
            <dd>
              <el-row :gutter="60">
                <el-col :span="10">
                  互联网标识
                </el-col>
                <el-col :span="14">
                  <el-tag v-if="checkPhoneInfo" type="warning" size="small">{{opObj.basic_info.phone_info}}</el-tag>
                  <span v-else>{{opObj.basic_info.phone_info}}</span>
                </el-col>
              </el-row>
            </dd>
            <dd>
              <el-row :gutter="60">
                <el-col :span="10">
                  号码运营商
                </el-col>
                <el-col :span="14">
                  {{opObj.basic_info.operator_zh}}
                </el-col>
              </el-row>
            </dd>
            <dd>
              <el-row :gutter="60">
                <el-col :span="10">
                  号码归属地
                </el-col>
                <el-col :span="14">
                  {{opObj.basic_info.phone_location}}
                </el-col>
              </el-row>
            </dd>
            <dd>
              <el-row :gutter="60">
                <el-col :span="10">
                  注册时间
                </el-col>
                <el-col :span="14">
                  <el-tag v-if="checkRegTime" :type="checkRegTime" size="small">{{opObj.basic_info.reg_time}}</el-tag>
                  <span v-else>{{opObj.basic_info.reg_time}}</span>
                </el-col>
              </el-row>
            </dd>
            <dd>
              <el-row :gutter="60">
                <el-col :span="10">
                  真实姓名
                </el-col>
                <el-col :span="14">
                  {{opObj.basic_info.operator_name}}
                  <el-tag type="danger" v-if="opObj.basic_info.name_check && opObj.basic_info.name_check === 3" size="small">{{opObj.basic_info.name_check | FilterToFisk('riskCardPhoneCheck')}}</el-tag>
                  <el-tag v-if="opObj.basic_info.name_check && opObj.basic_info.name_check !== 3" size="small">{{opObj.basic_info.name_check | FilterToFisk('riskCardPhoneCheck')}}</el-tag>
                </el-col>
              </el-row>
            </dd>
            <dd>
              <el-row :gutter="60">
                <el-col :span="10">
                  身份证号
                </el-col>
                <el-col :span="14">
                  {{opObj.basic_info.operator_id_card}}
                  <el-tag type="danger" v-if="opObj.basic_info.id_card_check && opObj.basic_info.id_card_check === 3" size="small">{{opObj.basic_info.id_card_check | FilterToFisk('riskCardPhoneCheck')}}</el-tag>
                  <el-tag v-if="opObj.basic_info.id_card_check && opObj.basic_info.id_card_check !== 3" size="small">{{opObj.basic_info.id_card_check | FilterToFisk('riskCardPhoneCheck')}}</el-tag>
                </el-col>
              </el-row>
            </dd>
            <dd>
              <el-row :gutter="60">
                <el-col :span="10">
                  当前余额(元)
                </el-col>
                <el-col :span="14">
                  {{opObj.basic_info.cur_balance}}
                </el-col>
              </el-row>
            </dd>
            <dd>
              <el-row :gutter="60">
                <el-col :span="10">
                  每月平均消费(元)
                </el-col>
                <el-col :span="14">
                  {{opObj.basic_info.monthly_avg_consumption}}
                </el-col>
              </el-row>
            </dd>
            <dd v-for="(item, index) in opObj.basic_info.if_contact_emergency" :key="index+100">
              <el-row :gutter="60">
                <el-col :span="10">
                  {{
                    '是否联系紧急联系人' + item.no
                  }}
                </el-col>
                <el-col :span="14">
                  <el-tag :type="item.if_tel === 1 ? 'success' : 'danger'" size="small"> {{item.if_tel === 1 ? '电话联系：是' : '电话联系：否' }} </el-tag>
                  <el-tag :type="item.if_msg === 1 ? 'success' : 'danger'" size="small"> {{item.if_msg === 1 ? '短信联系：是' : '短信联系：否' }} </el-tag>
                </el-col>
              </el-row>
            </dd>
          </dl>
        </el-card>
      </el-col>
      <el-col :span="12">
        <blockquote class="quote" id="dianshang">风险监测</blockquote>
        <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
          <dl class="cardinfo">
            <dd>
              <el-row :gutter="60">
                <el-col :span="12">
                  <b>检查项目</b>
                </el-col>
                <el-col :span="12">
                  <b>检查结果</b>
                </el-col>
              </el-row>
            </dd>
            <dd v-for="(item, index) in opObj.risk_analysis.single_overdue" :key="index+200">
              <el-row :gutter="60">
                <el-col :span="12">
                  {{
                    (item.no === 0) ? '本人号码命中逾期情况' : '紧急联系人' + item.no + '号码命中逾期情况'
                  }}
                </el-col>
                <el-col :span="12">
                  <el-tag v-if="item.hit_cnt" type="danger" size="small"> {{item.hit_cnt}} 次</el-tag>
                  <el-tag v-else type="success" size="small"> {{item.hit_cnt}} 次</el-tag>
                </el-col>
              </el-row>
            </dd>
            <dd v-for="(item, index) in opObj.risk_analysis.contacts_overdue" :key="index+300">
              <el-row :gutter="60">
                <el-col :span="12">
                  {{
                    (item.type === 1) ? '主叫联系人号码命中逾期情况' :(item.type === 2) ? '被叫联系人号码命中逾期情况' :(item.type === 3) ? '互通联系人号码命中逾期情况' : ''
                  }}
                </el-col>
                <el-col :span="12">
                  <el-tag v-if="item.hit_cnt" type="danger" size="small"> 号码数量 {{item.hit_cnt}}, 通话次数 {{item.cnt}}, 通话时长(分) {{item.seconds | FilterToMinit}}</el-tag>
                  <el-tag v-else type="success" size="small"> {{item.hit_cnt}} 个</el-tag>
                </el-col>
              </el-row>
            </dd>
            <!-- <dd>
              <el-row :gutter="60">
                <el-col :span="12">
                  统计周期第一天：{{opObj.user_portrait.silent_days.start_day}}
                </el-col>
                <el-col :span="12">
                  统计周期最后一天：{{opObj.user_portrait.silent_days.end_day}}
                </el-col>
              </el-row>
            </dd> -->
          </dl>
        </el-card>
      </el-col>
    </el-row>
    <blockquote class="quote" id="dianshang">用户画像</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <dl class="cardinfo">
        <dd>
          <el-row :gutter="60">
            <el-col :span="4">
              <b>检查项目</b>
            </el-col>
            <el-col :span="6">
              <b>检查结果</b>
            </el-col>
            <el-col :span="14">
              <b>备注</b>
            </el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="4">
              朋友圈在哪儿
            </el-col>
            <el-col :span="6">
              <span v-if="opObj.user_portrait.contacts_distribution.area">{{opObj.user_portrait.contacts_distribution.area}}</span>
            </el-col>
            <el-col :span="14">
              联系人占比{{opObj.user_portrait.contacts_distribution.ratio}}
            </el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="4">
              号码静默情况
            </el-col>
            <el-col :span="6">
              最大静默天数 <span v-if="opObj.user_portrait.silent_days">{{opObj.user_portrait.silent_days.max_interval}}</span>
              ,月均静默天数
              <el-tag v-if="opObj.user_portrait.silent_days && checkDay(opObj.user_portrait.silent_days.monthly_avg_days)" :type="checkDay(opObj.user_portrait.silent_days.monthly_avg_days)" size="small">
                {{opObj.user_portrait.silent_days.monthly_avg_days}}
              </el-tag>
            </el-col>
            <el-col :span="14">
              无通话记录了和短信记录规则为静默情况
            </el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="4">
              夜间活动情况
            </el-col>
            <el-col :span="6">
              月平均时长(分)：{{opObj.user_portrait.night_activities.monthly_avg_seconds | FilterToMinit}},
              月平均占比：{{opObj.user_portrait.night_activities.monthly_avg_seconds_ratio}}
            </el-col>
            <el-col :span="14">
              夜间通话时长占全天候比例（23点-6点)
            </el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="4">
              互通号码数量
            </el-col>
            <el-col :span="6">
              互通联系人个数 {{opObj.user_portrait.both_call_cnt}}
            </el-col>
            <el-col :span="14">
              相互拨打过的号码数量
            </el-col>
          </el-row>
        </dd>
        <dd v-for="(item, index) in opObj.special_cate" :key="index + 1000">
          <el-row :gutter="60">
            <el-col :span="4">
              {{item.cate}}
            </el-col>
            <el-col :span="6">
              <el-tag v-if="checkCat(item.cate)" :type="checkCnt(item.talk_cnt)" size="small">{{item.talk_cnt}} 次</el-tag>
              <span v-else>{{item.talk_cnt}} 次</span>
            </el-col>
            <el-col :span="14">
              <el-collapse @change="handleChange">
                <el-collapse-item title="通讯详情" name="index">
                  <div class="lists" v-if="item.phone_detail && item.phone_detail.length > 0" v-for="(pditem, index) in item.phone_detail" :key="index">
                    {{pditem.phone}},
                    {{pditem.phone_info}},
                    主叫次数：{{pditem.call_cnt}}
                    主叫时长(分)：{{pditem.call_seconds | FilterToMinit}}
                    被叫次数：{{pditem.called_cnt}}
                    被叫时长(分)：{{pditem.called_seconds | FilterToMinit}}
                  </div>
                  <div class="lists" v-if="item.phone_detail && item.phone_detail.length === 0">暂无信息</div>
                </el-collapse-item>
              </el-collapse>
            </el-col>
          </el-row>
        </dd>
      </dl>
    </el-card>
    <blockquote class="quote" id="dianshang">联系人所在地区</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <dl class="cardinfo">
        <dd>
          <el-table
            header-row-class-name='headclass'
            :data="opObj.contact_area_analysis"
            stripe
            style="width: 100%">
            <el-table-column
              prop="area"
              label="地区">
            </el-table-column>
            <el-table-column
              prop="contact_phone_cnt"
              label="联系人数量">
            </el-table-column>
            <el-table-column
              label="联系人占比">
              <template slot-scope="scope">
                {{scope.row.contact_phone_cnt | FilterToRate(opObj.contact_area_analysis) }}
              </template>
            </el-table-column>
            <el-table-column
              prop="talk_seconds"
              label="通话总时长(分)">
              <template slot-scope="scope">
                {{scope.row.talk_seconds | FilterToMinit}}
              </template>
            </el-table-column>
            <el-table-column
              prop="call_cnt"
              label="主叫次数">
            </el-table-column>
            <el-table-column
              prop="call_seconds"
              label="主叫时长(分)">
              <template slot-scope="scope">
                {{scope.row.call_seconds | FilterToMinit}}
              </template>
            </el-table-column>
            <el-table-column
              prop="called_cnt"
              label="被叫次数">
            </el-table-column>
            <el-table-column
              prop="called_seconds"
              label="被叫时长(分)">
              <template slot-scope="scope">
                {{scope.row.called_seconds | FilterToMinit}}
              </template>
            </el-table-column>
          </el-table>
        </dd>
      </dl>
    </el-card>
    <blockquote class="quote" id="dianshang">运营商月消费</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <dl class="cardinfo">
        <dd>
          <el-table
            header-row-class-name='headclass'
            :data="opObj.monthly_consumption"
            stripe
            style="width: 100%">
            <el-table-column
              prop="month"
              label="月份">
            </el-table-column>
            <el-table-column
              prop="talk_seconds"
              label="通话时长(分)">
              <template slot-scope="scope">
                {{scope.row.talk_seconds | FilterToMinit}}
              </template>
            </el-table-column>
            <el-table-column
              prop="talk_cnt"
              label="通话次数">
            </el-table-column>
            <el-table-column
              prop="call_seconds"
              label="主叫时长(分)">
              <template slot-scope="scope">
                {{scope.row.call_seconds | FilterToMinit}}
              </template>
            </el-table-column>
            <el-table-column
              prop="called_seconds"
              label="被叫时长(分)">
              <template slot-scope="scope">
                {{scope.row.called_seconds | FilterToMinit}}
              </template>
            </el-table-column>
            <el-table-column
              prop="call_consumption"
              label="消费金额(元)">
              <template slot-scope="scope">
                <el-tag size="small" :type="checkSum(scope.row.call_consumption)">{{scope.row.call_consumption}}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </dd>
      </dl>
    </el-card>
    <blockquote class="quote" id="dianshang">通话地区分析</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <dl class="cardinfo">
        <dd>
          <el-table
            header-row-class-name='headclass'
            :data="opObj.area_analysis"
            stripe
            style="width: 100%">
            <el-table-column
              prop="area"
              label="通话地区">
            </el-table-column>
            <!-- <el-table-column
              prop="talk_seconds"
              label="通话时长(分)">
            </el-table-column> -->
            <el-table-column
              prop="talk_cnt"
              label="通话次数">
            </el-table-column>
            <el-table-column
              prop="talk_seconds"
              label="通话总时长(分)">
              <template slot-scope="scope">
                {{scope.row.talk_seconds | FilterToMinit}}
              </template>
            </el-table-column>
            <el-table-column
              prop="call_cnt"
              label="主叫次数">
            </el-table-column>
            <el-table-column
              prop="call_seconds"
              label="主叫时长(分)">
              <template slot-scope="scope">
                {{scope.row.call_seconds | FilterToMinit}}
              </template>
            </el-table-column>
            <el-table-column
              prop="called_cnt"
              label="被叫次数">
            </el-table-column>
            <el-table-column
              prop="called_seconds"
              label="被叫时长(分)">
              <template slot-scope="scope">
                {{scope.row.called_seconds | FilterToMinit}}
              </template>
            </el-table-column>
          </el-table>
        </dd>
      </dl>
    </el-card>
  </div>
</template>
<script>
import Spinner from '@/components/spinner'
import baseApi from '@/api/credit/baseinfo'
import moment from 'moment'
import axios from 'axios'
export default {
  components: {
    Spinner
  },
  data () {
    return {
      pagesize: 3,
      currentPage: 1,
      loading: {
        loaddingMsg: '',
        OPERATOR: false
      },
      fiskData: {
        OPERATOR: {
          tianji_api_tianjireport_detail_response: {
            basic_info: {},
            risk_analysis: {},
            contact_area_analysis: [],
            monthly_consumption: [],
            area_analysis: [],
            user_portrait: {
              contacts_distribution: {},
              night_activities: {},
              silent_days: {}
            }
          }
        }
      }
    }
  },
  computed: {
    opObj () {
      if (this.fiskData.OPERATOR) {
        return this.fiskData.OPERATOR.tianji_api_tianjireport_detail_response
      }
      return {}
    },
    checkRegTime () {
      let time = this.opObj.basic_info.reg_time
      if (time) {
        let diffmonth = moment(moment()).diff(time, 'month')
        if (diffmonth < 3) {
          return 'danger'
        } else if (diffmonth >= 3 && diffmonth < 6) {
          return 'warning'
        }
        return false
      }
      return false
    },
    checkPhoneInfo () {
      let info = this.opObj.basic_info.phone_info
      if (info) {
        let arrTxt = ['中介', '套现']
        return arrTxt.some((txt) => {
          let regtxt = new RegExp(txt, 'g')
          return regtxt.test(info)
        })
      }
      return false
    }
  },
  filters: {
    FilterToRate (value, Lists) {
      if (Lists) {
        let sum = 0
        Lists.forEach((item, index) => {
          if (!isNaN(item.contact_phone_cnt)) {
            sum = sum + item.contact_phone_cnt
          }
        })
        return parseFloat(value / sum * 100).toFixed(2) + '%'
      }
      return '0%'
    }
  },
  methods: {
    checkDay (day) {
      if (day) {
        if (day > 20) {
          return 'danger'
        } else if (day <= 20 && day > 10) {
          return 'warning'
        } else if (day <= 10 && day > 0) {
          return 'success'
        }
      } else {
        if (day === 0) {
          return 'success'
        }
        return false
      }
      return false
    },
    checkCnt (val) {
      if (val) {
        if (val > 0) {
          return 'danger'
        }
      }
      return 'success'
    },
    checkCat (cat) {
      if (cat) {
        let arrTxt = ['贷款类', '互金公司', '金融类']
        return arrTxt.some((txt) => {
          let regtxt = new RegExp(txt, 'g')
          return regtxt.test(cat)
        })
      }
      return false
    },
    checkSum (val) {
      if (val) {
        if (val > 100) {
          return 'success'
        } else if (val <= 100 && val > 50) {
          return 'warning'
        } else if (val <= 50) {
          return 'danger'
        }
      }
      return ''
    },
    handleChange (val) {
      console.log(val)
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
