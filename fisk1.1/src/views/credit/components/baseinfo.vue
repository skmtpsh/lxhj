<template>
  <div>
    <spinner :visible="loading.BASEINFO" :fixed="true" :text="loading.loaddingMsg"></spinner>
    <blockquote class="quote">身份证照片</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <dl class="cardinfo">
        <dd>
          <!-- {{idPhone}} -->
          <el-row :gutter="60">
            <el-dialog
              title="身份证照片"
              width="90%"
              top='50px'
              @close="closeDialog"
              :fullscreen = false
              :visible.sync="dialogVisible"
              >
              <el-carousel :autoplay="false" :interval="interval" ref="customCarouse" :style="{'min-height': height + 'px'}" v-scroll="scrollFn">
                <el-carousel-item trigger="click"  v-for="(item,index) in idPhone" :key="index" :style="{height: height + 'px'}">
                  <img :src="item" class="image" style="max-width:100%; height: 100%" :autoplay="false">
                </el-carousel-item>
              </el-carousel>
            </el-dialog>
            <el-col :span="4">
              <img :src="opObj.ocrPicture_1" class="image" style="max-width:100%;max-height:200px;" @click="setActive(0)">
            </el-col>
            <el-col :span="6">
              <img :src="opObj.idPictureFront" class="image" style="max-width:100%;max-height:200px;" @click="setActive(1)">
            </el-col>
            <el-col :span="6">
              <img :src="opObj.idPictureBack" class="image" style="max-width:100%;max-height:200px;" @click="setActive(2)">
            </el-col>
          </el-row>
        </dd>
      </dl>
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <b>活体检测结果</b></div>
      </div>
      <dl class="cardinfo">
        <dd>
          <el-row :gutter="60">
            <el-col :span="7">
              <span>与身份证头像照对比相似度：
                <template v-if="fiskData['BASEINFO'].ocrInfo.cardVerifyScore">
                  <el-tag size="small" :type="checkNum(fiskData['BASEINFO'].ocrInfo.cardVerifyScore, 0.7) ? 'success' : 'danger'">
                    <b>{{fiskData['BASEINFO'].ocrInfo.cardVerifyScore | FilterTo2}}</b>
                  </el-tag>
                </template>
              </span>
            </el-col>
            <el-col :span="5">
              <span>是否为hack行为：
                <template v-if="fiskData['BASEINFO'].ocrInfo.cardHackScore">
                  <el-tag size="small" :type="checkNum(fiskData['BASEINFO'].ocrInfo.cardHackScore, 0.98) ? 'danger' : 'success'">
                    <b>{{fiskData['BASEINFO'].ocrInfo.cardHackScore | FilterTo2}}</b>
                  </el-tag>
                </template>
              </span>
            </el-col>
            <el-col :span="7">
              <span>与公安部底图对比相似度：
                <template v-if="fiskData['BASEINFO'].ocrInfo.securityVerifyScore">
                  <el-tag size="small" :type="checkNum(fiskData['BASEINFO'].ocrInfo.securityVerifyScore, 0.7) ? 'success' : 'danger'">
                    <b>{{fiskData['BASEINFO'].ocrInfo.securityVerifyScore | FilterTo2}}</b>
                  </el-tag>
                </template>
              </span>
            </el-col>
            <el-col :span="5">
              <span>是否为hack行为：
                <template v-if="fiskData['BASEINFO'].ocrInfo.securityHackScore">
                  <el-tag size="small" :type="checkNum(fiskData['BASEINFO'].ocrInfo.securityHackScore, 0.98) ? 'danger' : 'success'">
                    <b>{{fiskData['BASEINFO'].ocrInfo.securityHackScore | FilterTo2}}</b>
                  </el-tag>
                </template>
              </span>
            </el-col>
          </el-row>
        </dd>
      </dl>
    </el-card>
    <blockquote class="quote">自有业务订单情况</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <dl class="cardinfo">
        <dd>
          <el-row :gutter="60">
            <el-col :span="6">
              <span>翼钱包是否有过订单：
                <template v-if="fiskData['ORDER'].yipurseCode === '0'"><el-tag size="small" type="danger"><b>{{fiskData['ORDER'].yipurseCode === '1' ? "否" : "是"}}</b></el-tag></template>
                <template v-else-if="fiskData['ORDER'].yipurseCode === '1'"><b>{{fiskData['ORDER'].yipurseCode === '1' ? "否" : "是"}}</b></template>
              </span>
            </el-col>
            <el-col :span="6">
              <span>钱达达是否有过订单：
                <template v-if="fiskData['ORDER'].qiandadaCode === '0'"><el-tag size="small" type="danger"><b>{{fiskData['ORDER'].qiandadaCode === '1' ? "否" : "是"}}</b></el-tag></template>
                <template v-else-if="fiskData['ORDER'].qiandadaCode === '1'"><b>{{fiskData['ORDER'].qiandadaCode === '1' ? "否" : "是"}}</b></template>
              </span>
            </el-col>
            <el-col :span="6">
              <span>佰联钱包是否有过订单：
                <template v-if="fiskData['ORDER'].bailianCode === '0'"><el-tag size="small" type="danger"><b>{{fiskData['ORDER'].bailianCode === '1' ? "否" : "是"}}</b></el-tag></template>
                <template v-else-if="fiskData['ORDER'].bailianCode === '1'"><b>{{fiskData['ORDER'].bailianCode === '1' ? "否" : "是"}}</b></template>
              </span>
            </el-col>
          </el-row>
        </dd>
        </dl>
    </el-card>
    <blockquote class="quote">基本信息</blockquote>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <dl class="cardinfo">
        <dd>
          <el-row :gutter="60">
            <el-col :span="6">
              <span>真实姓名：<b>{{opObj.realName}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>性别：<b>{{fiskData['BASEINFO'].basicInfo.gender}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>年龄：
                <el-tag type="danger" size="small" v-if="fiskData['BASEINFO'].basicInfo.age >= 40"><b>{{fiskData['BASEINFO'].basicInfo.age}}</b></el-tag>
                <b v-if="fiskData['BASEINFO'].basicInfo.age < 40">{{fiskData['BASEINFO'].basicInfo.age}}</b>
              </span>
            </el-col>
            <el-col :span="6">
              <span>身份证号码：<b>{{opObj.idNumber}}</b></span>
            </el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="6">
              <span>民族：
                <template v-if="checkNation"><el-tag size="small" type="danger"><b>{{fiskData['BASEINFO'].basicInfo.nation}}</b></el-tag></template>
                <template v-else><b>{{fiskData['BASEINFO'].basicInfo.nation}}</b></template>
              </span>
            </el-col>
            <el-col :span="6">
              <span>注册手机号：<b>{{fiskData['BASEINFO'].basicInfo.mobile}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>注册时间：<b>{{opObj.createTime | FilterTime }}</b></span>
            </el-col>
            <el-col :span="6">
              <span>QQ邮箱：<b>{{opObj.qq}}@qq.com</b></span>
            </el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="6">
              <span>银行卡号：<b>{{opObj.bankcardNumber}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>所属银行：<b>{{opObj.bankcardBank}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>银行预留手机号：<b>{{opObj.bankcardPhone}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>户籍地址：
                <template v-if="checkAddress"><el-tag size="small" type="danger"><b>{{fiskData['BASEINFO'].basicInfo.address}}</b></el-tag></template>
                <template v-else><b>{{fiskData['BASEINFO'].basicInfo.address}}</b></template>
              </span>
            </el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="6">
              <span>月收入：<b>{{opObj.jobSalary}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>注册地经纬度：<b>{{fiskData['BASEINFO'].basicInfo.registerLat, fiskData['BASEINFO'].basicInfo.registerLng}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>最后登录设备：<b>{{fiskData['BASEINFO'].deviceInfo}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>现居地址：<b>{{opObj.currentAddress}}</b></span>
            </el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="6">
              <span>单位名称：<b>{{opObj.jobCompany}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>单位电话：<b>{{opObj.jobContact}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>单位证明人：<b>{{opObj.jobPerson}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>单位地址：<b>{{opObj.jobAddress}}</b></span>
            </el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="6">
              <span>来源渠道：</span>
            </el-col>
            <el-col :span="6">
              <span>芝麻分：<b>{{fiskData['BASEINFO'].zhimaScore}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>身份证有效期：<b v-if="fiskData['BASEINFO'].validateInfo">{{fiskData['BASEINFO'].validateInfo.validateDate}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>是否在有效期：
                <template v-if="fiskData['BASEINFO'].validateInfo && fiskData['BASEINFO'].validateInfo.isValidate === '否'">
                  <el-tag size="small" type="danger"><b>{{fiskData['BASEINFO'].validateInfo.isValidate}}</b></el-tag>
                </template>
                <template v-else><b>{{fiskData['BASEINFO'].validateInfo.isValidate}}</b></template>
              </span>
            </el-col>
          </el-row>
        </dd>
      </dl>
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <b>紧急联系人信息</b></div>
      </div>
      <dl class="cardinfo">
        <dd>
          <el-row :gutter="60">
            <el-col :span="6">
              <span>紧急联系人姓名：<b>{{opObj.emergencyContactName}}</b></span>
            </el-col>
            <!-- <el-col :span="6">
              <span>通讯录备注：<b>{{opObj.emecontactNameDefault}}</b></span>
            </el-col> -->
            <el-col :span="6">
              <span>联系方式：<b>{{opObj.emergencyContactPhone}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>与本人关系：<b>{{opObj.emergencyContactRelation}}</b></span>
            </el-col>
          </el-row>
        </dd>
        <dd>
          <el-row :gutter="60">
            <el-col :span="6">
              <span>紧急联系人姓名：<b>{{opObj.otherContactName}}</b></span>
            </el-col>
            <!-- <el-col :span="6">
              <span>通讯录备注：<b>{{opObj.otherContactNameDefault}}</b></span>
            </el-col> -->
            <el-col :span="6">
              <span>联系方式：<b>{{opObj.otherContactPhone}}</b></span>
            </el-col>
            <el-col :span="6">
              <span>与本人关系：<b>{{opObj.otherContactRelation}}</b></span>
            </el-col>
          </el-row>
        </dd>
      </dl>
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <b>证件照片</b></div>
      </div>
      <dl class="cardinfo" v-if="opObj && opObj.certificatePicture_1">
        <dd>
         <el-row :gutter="60">
           <el-dialog
              title="证件照片"
              width="90%"
              top = '50px'
              @close = "closeDialog"
              :visible.sync="dialogVisiblePic"
              >
              <el-carousel :autoplay="false" :interval="interval" ref="carouse" :style="{'min-height': height + 'px'}" v-scroll="scrollFn">
                <el-carousel-item trigger="click"  v-for="(item,index) in idPic" :key="index" :style="{height: height + 'px'}">
                  <img :src="item" class="image" style="max-width:100%; height: 100%" :autoplay="false">
                </el-carousel-item>
              </el-carousel>
            </el-dialog>
            <el-col :span="2">
            </el-col>
            <el-col :span="5">
              <img :src="opObj.certificatePicture_1" class="image" style="max-width:100%;max-height:200px;"  @click="setPicActive(0)">
            </el-col>
            <el-col :span="5">
              <img :src="opObj.certificatePicture_2" class="image" style="max-width:100%;max-height:200px;"  @click="setPicActive(1)">
            </el-col>
            <el-col :span="5">
              <img :src="opObj.otherPicture_1" class="image" style="max-width:100%;max-height:200px;"  @click="setPicActive(2)">
            </el-col>
            <el-col :span="5">
              <img :src="opObj.otherPicture_2" class="image" style="max-width:100%;max-height:200px;"  @click="setPicActive(3)">
            </el-col>
            <el-col :span="2">
            </el-col>
          </el-row>
        </dd>
      </dl>
      <dl class="cardinfo" v-else>
        <dd><p>未认证</p></dd>
      </dl>
    </el-card>
    <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix box-card-tit">
        <div class="card-tit"><svg-icon icon-class="play_fill" /> <b>淘宝收货地址</b></div>
      </div>
      <dl class="cardinfo">
        <dd>
          <el-table
            header-row-class-name='headclass'
            :data="fiskData['BASEINFO'].addressList"
            stripe
            style="width: 100%">
            <el-table-column
              prop="riskIsDefault"
              label="默认地址"
              width="80">
              <template slot-scope="scope">
                <span><b>{{scope.row.riskIsDefault==false?"否":"是"}}</b></span>
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
              width="120">
            </el-table-column>
            <el-table-column
              prop="riskPhone"
              label="固定号码"
              width="120">
            </el-table-column>
            <el-table-column
              prop="riskEmail"
              label="邮箱"
              width="120">
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
import axios from 'axios'
const MAXHEIGHT = document.documentElement.clientHeight || document.body.clientHeight
const MINHEIGHT = 600
export default {
  components: {
    Spinner
  },
  data () {
    return {
      isMax: false,
      isMin: false,
      height: MINHEIGHT,
      interval: 100,
      dialogVisible: false,
      dialogVisiblePic: false,
      customIndex: 0,
      loading: {
        loaddingMsg: '',
        BASEINFO: false
      },
      fiskData: {
        BASEINFO: {
          validateInfo: {},
          ocrInfo: '',
          userInfo: '',
          basicInfo: '',
          deviceInfo: '',
          addressList: [],
          zhimaScore: ''
        },
        ORDER: {
        }
      }
    }
  },
  filters: {
    FilterTo2 (value) {
      if (!isNaN(value)) {
        if (parseInt(value) === value) {
          return value
        }
        let n1len
        try {
          n1len = (value + '').split('.')[0].length
        } catch (f) {
          n1len = 0
        }
        return (value + '').substring(0, n1len + 3)
      }
      return ''
    }
  },
  computed: {
    checkNation () {
      if (this.fiskData['BASEINFO'].basicInfo.nation) {
        let temp = this.fiskData['BASEINFO'].basicInfo.nation + ''
        if (temp.indexOf('维吾尔') > -1 || temp.indexOf('内蒙') > -1 || temp.indexOf('藏') > -1) {
          return true
        }
      }
      return false
    },
    checkAddress () {
      if (this.fiskData['BASEINFO'].basicInfo.address) {
        let temp = this.fiskData['BASEINFO'].basicInfo.address + ''
        if (temp.indexOf('新疆') > -1 || temp.indexOf('西藏') > -1) {
          return true
        }
      }
      return false
    },
    opObj () {
      if (this.fiskData['BASEINFO']) {
        return this.fiskData['BASEINFO'].userInfo
      }
      return {}
    },
    idPhone () {
      return [this.fiskData['BASEINFO'].userInfo.ocrPicture_1, this.fiskData['BASEINFO'].userInfo.idPictureFront, this.fiskData['BASEINFO'].userInfo.idPictureBack]
    },
    idPic () {
      let arrs = [this.fiskData['BASEINFO'].userInfo.certificatePicture_1, this.fiskData['BASEINFO'].userInfo.certificatePicture_2, this.fiskData['BASEINFO'].userInfo.otherPicture_1, this.fiskData['BASEINFO'].userInfo.otherPicture_2]
      return arrs.filter(function (arr) {
        return arr !== undefined
      })
    }
  },
  methods: {
    scrollFn (direction) {
      if (direction) {
        if (this.height >= MAXHEIGHT) {
          if (!this.isMax) {
            this.isMax = true
            this.$message({
              message: '已经是最大值',
              type: 'warning'
            })
          }
          this.height = MAXHEIGHT
        } else {
          this.height = this.height + 100
          this.isMin = false
        }
        // this.height = this.height + 100
      } else {
        if (this.height <= MINHEIGHT) {
          if (!this.isMin) {
            this.isMin = true
            this.$message({
              message: '已经是最小值',
              type: 'warning'
            })
          }
          this.height = MINHEIGHT
        } else {
          this.height = this.height - 100
          this.isMax = false
        }
      }
    },
    checkNum (value, std) {
      if (!isNaN(value)) {
        if (parseInt(value) === value) {
          if (value - std > 0) {
            return true
          } else {
            return false
          }
        }
        let n1len
        try {
          n1len = (value + '').split('.')[0].length
        } catch (f) {
          n1len = 0
        }
        if (parseFloat((value + '').substring(0, n1len + 3)) - std >= 0) {
          return true
        } else {
          return false
        }
      }
      return false
    },
    getRefresh (type) {
      this.loading[type] = true
      baseApi[type](this.params)
        .then((response) => {
          this.loading[type] = false
          if (response.data.code === 200) {
            this.fiskData[type] = response.data.datas
          } else {
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    setActive: function (index) {
      this.dialogVisible = true
      // this.customIndex = index
      setTimeout(() => {
        this.$refs.customCarouse.setActiveItem(index)
      }, 30)
    },
    setPicActive: function (index) {
      this.dialogVisiblePic = true
      setTimeout(() => {
        this.$refs.carouse.setActiveItem(index)
      }, 30)
    },
    closeDialog () {
      this.height = MINHEIGHT
    }
  },
  beforeMount () {
    let allRequest = [
      'BASEINFO',
      'ORDER'
    ]
    let querys = this.$route.query
    if (!querys) { // Object.keys(querys).length
      this.$message({
        message: '参数不正确',
        type: 'warning'
      })
    }
    // Loading
    // Define Params
    this.params = querys
    // ?signSystem=4b1d2b0b06ad467ac8bfa1174de9207a&appId=fangchunxiao1234&timestamp=20180906133912&idCard=330205199601293313&mobile=15268416427&name=王侃
    // 备用方案二
    // allRequest.forEach((item) => {
    //   this.getRefresh(item)
    // })

    // 备用方案一
    // set function fisk.js request
    let reqArrFun = allRequest.map((item) => {
      return baseApi[item](this.params)
    })
    this.loading.BASEINFO = true
    axios.all(reqArrFun)
      .then(axios.spread((...allResonse) => {
        this.loading.BASEINFO = false
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
