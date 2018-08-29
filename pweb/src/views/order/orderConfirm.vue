<template>
  <div class="page">
    <section class="group-wrap">
      <template v-if="addr.length > 0 ">
        <ul class="addr">
          <li v-for="(item, index) in addr" v-bind:key="index" @click="selAddr">
            <div class="addrinfo">
              <p>收货人：<span>{{item.name}}</span><span>{{item.mobile}}</span></p>
              <p class="addr">收货地址：{{item.address}}</p>
            </div>
          </li>
        </ul>
      </template>
      <template v-if="addr.length === 0 ">
        <div class="blankaddr" @click="gotoHandle">
          + 请添加收获地址
        </div>
      </template>
      <div class="addrbg"></div>
    </section>
    <section class="group-wrap" style="padding: 0 10px;">
      <div class="ordernum">订单编号：3256485123654</div>
      <ul class="pobj">
        <li>
          <div class="pimg"><img class="photo" :src="img[0].imgUrl"></div>
          <div class="pinfo">
            <p class="tit">{{detail.name}}</p>
            <p class="skuprice"><span>{{detail.colour}}</span><span>{{detail.brand}}</span><span>{{detail.newState}}</span></p>
            <p class="numwrap">x 1</p>
          </div>
        </li>
      </ul>
      <ul class="patten" style="margin-top: 0px;">
        <li><div class="label">分期期数</div><div class="inputwrap">{{detail.code}}期</div></li>
      </ul>
    </section>
    <section class="group-wrap" style="padding: 0 10px;">
      <ul class="patten">
        <li>
          <div class="label" style="width:50px;">备注</div>
          <div class="inputwrap">
            <input type="text" autocomplete="off" v-model="note" class="inputw" placeholder="填写内容与客服协商确认" />
          </div>
        </li>
        <li><div class="label">支付方式</div><div class="inputwrap">分期付款</div></li>
        <li><div class="label">配送方式</div><div class="inputwrap">普通快递</div></li>
      </ul>
    </section>
    <section class="group-wrap">
      <p class="pricewrap"><span class="tit">商品总额</span><span class="price">¥<em>{{detail.amount}}</em></span></p>
      <p class="pricewrap"><span class="tit">月供</span><span class="price">¥<em>{{detail.monthAmount}}</em>/月</span></p>
      <p class="pricewrap"><span class="tit">保险服务费</span><span class="price">¥<em>{{(detail.monthAmount*detail.code - detail.amount).toFixed(2)}}</em></span></p>
      <p class="pricewrap"><span class="tit">运费</span><span class="price">¥<em>0.00</em></span></p>
    </section>
    <section class="group-wrap" style="background: none;">
      <span class='checkbox'>
        <input type='checkbox' id='checkbox' v-model="protol"><label for='checkbox'></label>
      </span>
      <span style="color:#ff5b06">我已阅读并同意<span @click="gotoProtol">《设备租赁协议》</span></span>
    </section>
    <section class="actionBar-bg">
      <section class="actionBar">
        <div class="actionBarWrap">
          <div class="bprice price"><span>¥{{(detail.monthAmount*detail.code).toFixed(2)}}元</span></div>
          <div class="btrade">
            <a class="buy" id="buyBtn" @click="submitOrder">提交订单</a>
          </div>
        </div>
      </section>
    </section>
    <section id="addralert" class="alert" :class="{show: isAddr}">
      <div class="addrbody">
        您还没有收货地址，请添加一个新的收货地址
      </div>
      <div class="addrfoot">
        <a href="javascript:;" class="btnback" @click="gotoCancel">返回</a>
        <a href="javascript:;" class="btngo" @click="gotoHandle">立即添加</a>
      </div>
    </section>
    <section class="bgwhite" :class="{show: isBg}"></section>
    <section id="bg" class="bg" :class="{show: isAddr}"></section>
    <section class="bgalert" :class="{show: isAlert}">{{msg}}</section>
  </div>
</template>
<script>
import * as addressApi from '@/api/address'
import * as orderApi from '@/api/order'
// import Cookies from 'js-cookie'
import LocalStorage from 'localStorage'
import { mapGetters } from 'vuex'
export default {
  name: 'orderconfirm',
  data () {
    return {
      detail: {},
      addr: [],
      img: [],
      note: '',
      isBg: false,
      isAddr: false, // 添加地址对话框是否出现
      isAlert: false, // alert对话框是否出现
      isShow: false, // 判断地址添加地址方法是否出现
      msg: '',
      protol: true
    }
  },
  computed: {
    ...mapGetters([
      'getAddress'
    ])
  },
  methods: {
    gotoProtol () {
      this.$router.push({path: '/protol'})
    },
    submitOrder () {
      if (!this.protol) {
        this.isAlert = true
        this.msg = '请选择协议'
        setTimeout(() => {
          this.isAlert = false
        }, 2000)
        return false
      }
      // console.log(this.$route.query)
      // console.log(this.addr)
      if (this.addr.length === 0) {
        this.isAddr = true
        return false
      }
      let orderObj = {
        token: this.$route.query.token,
        userId: this.$route.query.userid,
        termLine: parseInt(this.detail.code),
        goodsId: this.detail.id,
        goodsName: this.detail.name,
        goodsPrice: this.detail.monthAmount,
        amount: this.detail.amount,
        useState: this.detail.postState,
        url: this.img[0].imgUrl,
        addressId: this.addr[0].addressId, // 地址ID
        note: this.note
      }
      // 下订单调用
      orderApi.orderConfirm(orderObj)
        .then((response) => {
          if (response.data.code === '0') {
            this.isAlert = true
            this.isBg = true
            this.msg = response.data.msg
            LocalStorage.removeItem('product') // 下单完成清除商品信息
            setTimeout(() => {
              this.isAlert = false
              this.isBg = false
              // 调用原生app 方法
              let type = parseInt(this.$route.query.type)
              if (type === 0) { // andriod
                window.yilease.confirmOrder()
              }
              if (type === 1) { // ios
                window.webkit.messageHandlers.confirmOrder.postMessage(null)
              }
            }, 2000)
          } else {
            this.isAlert = true
            this.msg = response.data.msg
            setTimeout(() => {
              this.isAlert = false
            }, 2000)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    selAddr () {
      // {token: this.$route.query.token, userid: this.$route.query.userid, type: this.$route.query.type}
      this.$router.push({path: '/addr', query: this.qry}) // 选择跳转到地址列表
    },
    gotoCancel () {
      this.isAddr = false
    },
    gotoHandle () {
      this.$router.push({path: '/addr/add', query: this.qry}) // 没有地址跳转到地址列表
    }
  },
  // watch: {
  //   '$route' (to, from) {
  //   }
  // },
  created () {
    // console.log(this.$route.query)
    this.qry = this.$route.query
    // let qs = this.$route.query
    // if (qs.token) {
    //   return false
    // }
    // let proInfoCook = JSON.parse(Cookies.get('product'))
    let proInfoCook = JSON.parse(LocalStorage.getItem('product'))
    // console.log(proInfoCook)
    // console.log(proInfoCook)
    if (proInfoCook) {
      this.detail = proInfoCook
      this.img = proInfoCook.imageList.filter((imgObj) => {
        return imgObj.imgType === 0
      })
      // console.log(this.img)
    } else {
      // this.$router.go(-1)
      // return false
      // this.detail = {}
      // this.img = []
    }
    if (Object.keys(this.getAddress).length > 0) {
      this.addr = [this.getAddress]
    } else {
      addressApi.getAddrList({token: this.qry.token, userId: this.qry.userid})
        .then((response) => {
          if (response.data.code === '0') {
            if (response.data.data === null || response.data.data.length === 0) {
              this.isAddr = true
              return false
            }
            if (response.data.data.length > 0) { // 先默认选择第一个为默认地址
              this.addr = [response.data.data[0]]
              this.isShow = true
            }
            let addrIs = response.data.data.filter((addr) => {
              return addr.isDefault === '是'
            })
            if (addrIs.length > 0) { // 再判断是否有默认地址,有就覆盖
              this.addr = addrIs
              this.isShow = true
            }
            // console.log(this.addr.length)
            // debugger
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
.page {
  padding-top: 10px;
}
.checkbox {
  position: relative;
}

.checkbox input[type='checkbox'] {
  /* position: absolute;
  left: 0;
  top: 0; */
  width: 20px;
  height: 20px;
  opacity: 0;
}

.checkbox label {
  position: relative;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
}

.checkbox label:before {
  content: '';
  position: absolute;
  left: -20px;
  top: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #999;
  /* transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease; */
}

.checkbox label:after {
  content: '';
  position: absolute;
  left: -12px;
  top: 2px;
  width: 6px;
  height: 12px;
  border: 0;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  background: #fff;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  /* transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease; */
}

.checkbox input[type='checkbox']:checked+label:before {
  background: #ff5b06;
  border-color: #ff5b06;
}

.checkbox input[type='checkbox']:checked+label:after {
  background: #ff5b06;
}
.blankaddr {
  height: 80px;
  line-height: 80px;
  text-align: center;
  padding-right: 0
}
.addrbg {
  margin-bottom: -10px;
  background: url('../../assets/o2.png') repeat-x center center;
  height: 6px;
}
.bgalert {
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  display: none;
  color: #fff;
  font-size: 14px;
  width: 200px;
  /* width: 100%; */
  /* height: 36px; */
  line-height: 36px;
  background: #000;
  opacity: .8;
  text-align: center;
  margin: 40% auto 0;
}
.show {
  display: block;
}
.bg.show, .alert.show, .bgwhite.show  {
  display: block;
}
.bg, .alert, .bgwhite {
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  display: none;
}
.bgwhite.show {
  background: #fff;
  opacity: 0;
  height: 100%;
  width: 100%;
}
.bg.show {
  background: #000;
  opacity: .6;
  height: 100%;
  width: 100%;
}
.alert.show {
  background: #fff;
  z-index: 1001;
  width: 60%;
  margin: 40% auto 0;
}
.addrbody {
  padding: 20px;
  font-size: 14px;
}
.addrfoot {
  border-top:1px solid #f5f5f5;
  display: -webkit-box!important;
  display: -webkit-flex!important;
  display: -ms-flexbox!important;
  display: flex!important;
}
.addrfoot a {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 14px;
  padding: 10px;
  text-align: center
}
.addrfoot a.btngo {
  color: #ff5b06;
}
.addr {
}
.addr li {
  position: relative;
  display: -webkit-box!important;
  display: -webkit-flex!important;
  display: -ms-flexbox!important;
  display: flex!important;
  padding-right: 40px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 70px;
}
.addr li:after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  position: absolute;
  top: 50%;
  margin-top: -6px;
  right: 10px
}
.addrinfo {
  font-size: 14px;
  display: table-cell;
  vertical-align: middle;
}
.addrinfo p {
  margin: 5px 0;
}
.addrinfo .addr {
  color: #999
}
.ordernum {
  height: 44px;
  line-height: 44px;
  font-size: 16px;
}
.pobj li{
  position: relative;
  overflow: hidden;
  display: -webkit-box!important;
  display: -webkit-flex!important;
  display: -ms-flexbox!important;
  display: flex!important;
  background: #fafafa;
  padding: 10px 20px;
  margin: 0 -10px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.pimg {
  position: relative;
  width: 70px;
  margin-right: 10px;
}
.pimg img {
  max-width: 100%;
}
.pinfo {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 12px;
}
.pinfo .tit {
  color: #333;
  font-size: 14px;
  line-height: 1.5
}
.skuprice {
  line-height: 20px;
  padding-right: 40px;
}
.skuprice span {
  margin-right: 5px;
  color: #999
}
.numwrap {
  color: #999;
  height: 20px;
  line-height: 20px;
  margin-top: -20px;
  text-align: right;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.inputw {
  display: block;
  width: 100%;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  border: none;
  background: none;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0;
  -webkit-tap-highlight-color: transparent;
}
.patten {
  margin: 10px 0 0;
}
.patten li {
  display: -webkit-box!important;
  display: -webkit-flex!important;
  display: -ms-flexbox!important;
  display: flex!important;
  font-size: 16px;
  border-bottom: 1px solid #f5f5f5;
  height: 50px;
  line-height: 50px;
}
.patten li:last-child {
  border-bottom: 0 none;
}
.patten .label {
  width: 80px;
}
.patten .inputwrap {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: right;
  color: #999
}
.pricewrap {
  text-align: right;
  overflow: hidden;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
}
.pricewrap .tit {
  float: left;
}
.actionBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  left: constant(safe-area-inset-left);
  right: constant(safe-area-inset-right);
  transform: translateZ(0)
}
.actionBar-bg:after {
  content: " ";
  display: block;
  height: 50px;
}
.actionBar .actionBarWrap {
  width: 100%;
  height: 50px;
  background-color: #FFF;
  line-height: 50px;
  display: -webkit-box;
  display: box;
  display: -webkit-flex;
  display: flex;
  text-align: left;
  padding-bottom: var(--safe-area-inset-bottom)
}
.actionBar .bprice {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  border-top: 1px solid #f2f2f2
}
.actionBar .bprice span {
  margin-left:10px;
  color: #ff5b06
}
.actionBar .btrade {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: flex;
  text-align: center;
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0)
}
.btrade .buy {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  color: #fff;
  background-color: #ff5b06
}
</style>
