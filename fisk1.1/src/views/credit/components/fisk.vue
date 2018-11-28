<template>
  <div>
    <spinner :visible="loading.FISK_ALL" :fixed="true" :text="loading.loaddingMsg"></spinner>
    <blockquote class="quote" id="blackList">黑名单</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_BLACKAGENT" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_BLACKAGENT">机构黑名单风险检测</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_BLACKAGENT')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_BLACKAGENT'].reportTime}}</span></div>
      </div>
      <blackTag v-if="fiskData['FISK_BLACKAGENT']" :blackObj="fiskData['FISK_BLACKAGENT']" />
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_BLACKHULU" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_BLACKHULU">葫芦黑名单风险检测</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_BLACKHULU')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_BLACKHULU'].reportTime}}</span></div>
      </div>
      <huluTag :huluObj="fiskData['FISK_BLACKHULU'].riskData" />
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_XINYANWHITE" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_XINYAN">新颜征信负面洗白</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_XINYANWHITE')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_XINYANBALCK'].reportTime}}</span></div>
      </div>
      <xinyanTag :whiteObj="fiskData['FISK_XINYANWHITE'].riskData" :blackObj="fiskData['FISK_XINYANBALCK'].riskData" />
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_BAIQISHI" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_BAIQISHI_MULTI">白骑士多头风险监测</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_BAIQISHI')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_BAIQISHI'].reportTime}}</span></div>
      </div>
      <baimulTag :baimulObj="fiskData['FISK_BAIQISHI']" />
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_BAIQISHI" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_BAIQISHI_BLACK">白骑士黑名单风险监测</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_BAIQISHI')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_BAIQISHI'].reportTime}}</span></div>
      </div>
      <baibalck-tag :baiblackObj="fiskData['FISK_BAIQISHI']"></baibalck-tag>
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_BAIQISHI" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_BAIRONG">百融数据</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_BAIRONG')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_BAIRONG'].reportTime}}</span></div>
      </div>
      <baiRongTag :fiskData="fiskData['FISK_BAIRONG']" :bairongObj="bairongObj" />
    </el-card>
    <blockquote class="quote" id="blackList">多头</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_TONGDUN" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_TONGDUN">同盾数据</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_TONGDUN')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_TONGDUN'].reportTime}}</span></div>
      </div>
      <tongdunTag :tongdunObj="fiskData['FISK_TONGDUN'].riskData" />
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_MORPHO" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_MORPHO">中智诚</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_MORPHO')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_MORPHO'].reportTime}}</span></div>
      </div>
      <morphoTag :morphoObj="fiskData['FISK_MORPHO'].riskData" />
      <morphoHaoriTag :morphoObj="fiskData['FISK_HAORI'].riskData" />
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_SUANHUA" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_SUANHUA">算话</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_SUANHUA')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_SUANHUA'].reportTime}}</span></div>
      </div>
      <suanhuaTag :suanhuaObj="fiskData['FISK_SUANHUA'].riskData" />
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_AFU" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_AFU">至诚阿福</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_AFU')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_AFU'].reportTime}}</span></div>
      </div>
      <afuTag :afuObj="fiskData['FISK_AFU'].riskData.riskDataDetail" />
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_ZHENGXIN" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_ZHENGXIN">91征信</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_ZHENGXIN')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_ZHENGXIN'].reportTime}}</span></div>
      </div>
      <zhengxinTag :zhengxinObj="fiskData['FISK_ZHENGXIN'].riskData" :zhengxinStatic="zhengxinStatic" />
    </el-card>
    <blockquote class="quote" id="fanqizha">反欺诈</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_BAIQISHI" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_BAIQISHI_ANTI">白骑士反欺诈风险监测</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_BAIQISHI')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_BAIQISHI'].reportTime}}</span></div>
      </div>
      <baianti-tag :baiantiObj="fiskData['FISK_BAIQISHI']"></baianti-tag>
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FIST_REGISTER" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FIST_REGISTER">白骑士注册信息</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FIST_REGISTER')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FIST_REGISTER'].reportTime}}</span></div>
      </div>
      <register-tag :bairegiObj="fiskData['FIST_REGISTER']"></register-tag>
    </el-card>

    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }" style="display:none">
      <spinner :visible="loading.FIST_ZHIMA" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FIST_ZHIMA">白骑士芝麻信用</span></div>
        <div class="card-op"><a href="javascript:;" @click="handleRefresh('FIST_ZHIMA')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FIST_ZHIMA'].reportTime}}</span></div>
      </div>
      <zhima-tag :zhimaObj="fiskData['FIST_ZHIMA']"></zhima-tag>
    </el-card>

    <blockquote class="quote" id="dianshang">电商数据</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <spinner :visible="loading.FISK_BAIQISHI_TAOBAO" :fixed="false" :text="loading.loaddingMsg"></spinner>
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <span id="FISK_BAIQISHI_TAOBAO">白骑士淘宝风险监测</span></div>
        <!-- <div class="card-op"><a href="javascript:;" @click="handleRefresh('FISK_BAIQISHI_TAOBAO')"><svg-icon icon-class="refresh" /></a> <span class="rptime">报告时间：{{fiskData['FISK_BAIQISHI_TAOBAO'].reportTime}}</span></div> -->
      </div>
      <taobaoTag v-if="fiskData['FISK_BAIQISHI_TAOBAO'].riskData.riskDetailInfo.riskType" :taobaoObj="fiskData['FISK_BAIQISHI_TAOBAO'].riskData" />
      <dl class="cardinfo" v-else>
        <dd><p>未认证</p></dd>
      </dl>
    </el-card>
  </div>
</template>
<script>
import Spinner from '@/components/spinner'
import fiskApi from '@/api/credit/fisk'
import axios from 'axios'
export default {
  components: {
    Spinner,
    baiRongTag: () => import('./fisk/bairong.vue'),
    tongdunTag: () => import('./fisk/tongdun.vue'),
    huluTag: () => import('./fisk/hulu.vue'),
    morphoTag: () => import('./fisk/morpho.vue'),
    morphoHaoriTag: () => import('./fisk/morpho_haori.vue'),
    suanhuaTag: () => import('./fisk/suanhua.vue'),
    afuTag: () => import('./fisk/afu.vue'),
    blackTag: () => import('./fisk/blackagent.vue'),
    xinyanTag: () => import('./fisk/xinyan.vue'),
    zhengxinTag: () => import('./fisk/zhengxin.vue'),
    taobaoTag: () => import('./fisk/taobao.vue'),
    baimulTag: () => import('./fisk/baimulti.vue'),
    baibalckTag: () => import('./fisk/baiblack.vue'),
    baiantiTag: () => import('./fisk/baianti.vue'),
    registerTag: () => import('./fisk/bairegister.vue'),
    zhimaTag: () => import('./fisk/zhima.vue')
  },
  data () {
    return {
      loading: {
        loaddingMsg: '',
        FISK_ALL: false,
        FISK_BLACKAGENT: false,
        FISK_BLACKHULU: false,
        FISK_XINYANBALCK: false,
        FISK_XINYANWHITE: false,
        FISK_BAIQISHI: false,
        FISK_BAIQISHI_TAOBAO: false,
        FISK_TONGDUN: false,
        FISK_MORPHO: false,
        FISK_HAORI: false,
        FISK_SUANHUA: false,
        FISK_AFU: false,
        FISK_ZHENGXIN: false,
        FISK_BAIRONG: false,
        FIST_REGISTER: false,
        FIST_ZHIMA: false
      },
      fiskData: {
        FISK_BLACKAGENT: '',
        FISK_BLACKHULU: {
          riskData: {
            riskUserBasic: '',
            riskBlacklist: '',
            riskHistoryOrg: '',
            riskHistorySearch: '',
            riskSocialNetwork: ''
          }
        },
        FISK_XINYANBALCK: {
          riskData: {
            riskDataDetail: ''
          }
        },
        FISK_XINYANWHITE: {
          riskData: {
            riskDataDetail: ''
          }
        },
        FISK_TONGDUN: {
          riskData: {
            riskAntifraud: {}
          }
        },
        FISK_BAIQISHI: {
        },
        FISK_MORPHO: {
          riskData: {
            riskBlacklist: {
              riskIdcard: {
                riskAll: {}
              },
              riskMobile: {
                riskAll: {}
              }
            },
            riskLoanInfo: {
              riskIdcard: {
                riskAll: {
                  riskTimeScopes: {
                    riskAll: {},
                    riskD90: {},
                    riskD360: {}
                  }
                }
              },
              riskMobile: {
                riskAll: {
                  riskTimeScopes: {
                    riskAll: {},
                    riskD90: {},
                    riskD360: {}
                  }
                }
              }
            }
          }
        },
        FISK_HAORI: {
          riskData: {
            riskIntelliCredit: {
              riskVelocityCheck: {
                riskIdcard: {},
                riskMobile: {}
              }
            }
          }
        },
        FISK_SUANHUA: {
          riskData: {
            riskG1: {}
          }
        },
        FISK_AFU: {
          riskData: {
            riskDataDetail: {
              riskLoanRecords: [],
              riskQueryHistory: [],
              riskQueryStatistics: {},
              riskResults: []
            }
          }
        },
        FISK_ZHENGXIN: {
          riskData: {
            riskLoanInfos: []
          }
        },
        FISK_BAIQISHI_TAOBAO: {
          riskData: {
            riskDetailInfo: {
              riskType: '',
              riskReceiveAddresses: [],
              riskZhifubaoInfo: {},
              riskOrderDetails: [],
              riskPersonalInfo: {}
            }
          }
        },
        FISK_BAIRONG: {
        },
        FIST_REGISTER: {
          riskData: []
        },
        FIST_ZHIMA: {
          riskData: {
            riskZmDetailInfo: {
            }
          }
        }
      },
      blackData: '',
      huluData: '',
      zhengxinStatic: {
        judai: 0,
        pikuan: 0,
        daifang: 0,
        jiekuan: 0,
        count: 0
      }
    }
  },
  computed: {
    bairongObj () {
      let brObj = this.fiskData['FISK_BAIRONG']
      let tempObj = {
        total2: 0,
        total1: 0,
        total0: 0
      }
      Object.keys(brObj).forEach((item, i) => {
        if ((/^riskSl(.*?)$/g).test(item)) {
          if (brObj[item] === '2') {
            tempObj.total2++
          }
          if (brObj[item] === '1') {
            tempObj.total1++
          }
          if (brObj[item] === '0') {
            tempObj.total0++
          }
        }
      })
      return tempObj
    }
  },
  methods: {
    getRefresh (type) {
      this.loading[type] = true
      fiskApi[type](this.singleParams)
        .then((response) => {
          this.loading[type] = false
          if (response.data.code === 200 && response.data.datas) {
            this.fiskData[type] = response.data.datas
          } else {
          }
          if (type === 'FISK_ZHENGXIN') {
            // 统计征信次数
            this.staticZx()
          }
        })
        .catch((error) => {
          this.loading[type] = false
          console.log(error)
        })
    },
    handleRefresh (type) {
      // this.params.isForce = true
      this.singleParams = Object.assign({}, this.params)
      this.singleParams.isForce = true
      if (type === 'FISK_XINYANWHITE') { // 新颜负面两个接口
        this.getRefresh('FISK_XINYANBALCK')
        this.getRefresh('FISK_XINYANWHITE')
      } else if (type === 'FISK_MORPHO') {
        this.getRefresh('FISK_MORPHO')
        this.getRefresh('FISK_HAORI')
      } else {
        this.getRefresh(type)
      }
    },
    staticZx () {
      if (this.fiskData['FISK_ZHENGXIN'].riskData.riskLoanInfos) {
        // 1.拒贷 2.批贷已放款 4.借款人放弃申请 5.审核中 6.待放款（3同6意义相同）
        this.fiskData['FISK_ZHENGXIN'].riskData.riskLoanInfos.forEach((item) => {
          if (item.riskBorrowState === 1) {
            this.zhengxinStatic.judai++
          }
          if (item.riskBorrowState === 2) {
            this.zhengxinStatic.pikuan++
          }
          if (item.riskBorrowState === 3 || item.riskBorrowState === 6 || item.riskBorrowState === 5) {
            this.zhengxinStatic.daifang++
          }
          if (item.riskBorrowState === 4) {
            this.zhengxinStatic.jiekuan++
          }
          this.zhengxinStatic.count++
        })
      }
    }
  },
  mounted () {
    // this.clickObj = Object.assign(this.loading)
    this.clickObj = {...this.loading}
  },
  beforeMount () {
    let allRequest = [
      'FISK_BLACKAGENT',
      'FISK_BLACKHULU',
      'FISK_XINYANBALCK',
      'FISK_XINYANWHITE',
      'FISK_BAIQISHI',
      'FISK_BAIQISHI_TAOBAO',
      'FISK_TONGDUN',
      'FISK_MORPHO',
      'FISK_HAORI',
      'FISK_SUANHUA',
      'FISK_AFU',
      'FISK_ZHENGXIN',
      'FISK_BAIRONG',
      'FIST_REGISTER',
      'FIST_ZHIMA'
    ]
    // Loading
    // Define Params
    let querys = this.$route.query
    if (!querys) { // Object.keys(querys).length
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
      return fiskApi[item](this.params)
    })
    this.loading['FISK_ALL'] = true
    axios.all(reqArrFun)
      .then(axios.spread((...allResonse) => {
        this.loading['FISK_ALL'] = false
        // set data
        for (let [i, item] of new Map(allResonse.map((item, i) => [i, item]))) {
          if (item.data.code === 200 && item.data.datas) {
            this.$set(this.fiskData, allRequest[i], item.data.datas)
          } else {
            console.log('interator:' + allRequest[i] + ' msg:' + item.data.message)
          }
        }
        // 统计征信次数
        this.staticZx()
      })).catch((error) => {
        this.loading['FISK_ALL'] = false
        console.log(error)
      })
  }
}
</script>
