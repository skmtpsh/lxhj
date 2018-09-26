<template>
  <div class="page">
    <div class="addrbg">
      <p class="state"><i class="ico1"></i>{{detail.state}}</p>
      <section class="group-wrap addrbox">
        <ul class="addr">
          <li >
            <div class="addrinfo">
              <p>收货人：<span>{{detail.personName}}</span><span>{{detail.personTel}}</span></p>
              <p class="addr">收货地址：{{detail.detailedAddress}}</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <section class="group-wrap" style="padding-top: 30px;">
      <div class="ordernum">订单编号：{{detail.orderNo}}</div>
      <ul class="pobj">
        <li>
          <div class="pimg"><img class="photo" :src="detail.imgUrl"></div>
          <div class="pinfo">
            <p class="tit">{{detail.goodsName}}</p>
            <p class="skuprice"><span>{{detail.colour}}</span><span>{{detail.brand}}</span><span>{{detail.model}}</span></p>
            <p class="numwrap">x 1</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="group-wrap" style="padding: 0 10px">
      <ul class="patten">
        <li><div class="label">快递单号</div><div class="inputwrap">{{detail.expressNo}}</div></li>
        <li><div class="label">下单时间</div><div class="inputwrap">{{detail.applyTime}}</div></li>
        <li><div class="label">签收时间</div><div class="inputwrap">{{detail.loanTime}}</div></li>
        <li><div class="label">分期期数</div><div class="inputwrap">共{{detail.terms}}期</div></li>
        <li><div class="label">配送方式</div><div class="inputwrap">普通快递</div></li>
      </ul>
    </section>
    <section class="group-wrap">
      <p class="pricewrap"><span class="tit">商品总额</span><span class="price">¥<em>{{detail.amount}}</em></span></p>
      <p class="pricewrap"><span class="tit">月供</span><span class="price">¥<em>{{detail.monthAmount}}</em>/月</span></p>
      <p class="pricewrap"><span class="tit">保险服务费</span><span class="price">¥<em>{{(detail.monthAmount*detail.terms - detail.amount).toFixed(2)}}</em></span></p>
      <p class="pricewrap"><span class="tit">运费</span><span class="price">¥<em>0.00</em></span></p>
    </section>
    <section class="actionBar-bg">
      <section class="actionBar">
        <div class="actionBarWrap">
          <div class="bprice price">实付款：<span>¥{{detail.amount}}</span></div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import * as orderApi from '@/api/order'
export default {
  data () {
    return {
      detail: {},
      addr: [],
      img: ''
    }
  },
  methods: {
  },
  created () {
    let orderObj = {
      token: this.$route.query.token,
      userId: this.$route.query.userid,
      loanApplyId: this.$route.query.loanapplyid,
      pageNum: this.$route.query.pagenum
    }
    orderApi.orderDetail(orderObj)
      .then((response) => {
        if (response.data.code === '0') {
          this.detail = response.data.data[0]
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.noinfo {
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width: 120px;
  height: 120px;
  background: url(../../assets/order.png) no-repeat center center;
}
.ico1 {
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  width: 18px;
  margin-right: 10px;
  background: url(../../assets/c1.png) no-repeat top center;
  background-size: cover
}
.state {
  height: 36px;
  line-height: 36px;
  color: #fff;
}
.addrbox {
  margin-bottom: -50px;
  border-radius: 5px;
}
.addrbg {
  padding: 10px;
  background: url(../../assets/o1.jpg) no-repeat top center;
  background-size: cover
}
.addr li {
  position: relative;
  display: -webkit-box!important;
  display: -webkit-flex!important;
  display: -ms-flexbox!important;
  display: flex!important;
  padding-left: 30px;
}
.addr li::after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0,-50%);
  width:30px;
  height: 30px;
  background: url(../../assets/c2.png) no-repeat top center;
  background-size: 50%
}
.addrinfo {
  font-size: 14px;
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
  font-size: 14px;
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
  align-items: center
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
  height: 30px;
  line-height: 30px;
  margin-top: -30px;
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
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  border: none;
  background: none;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0;
}
.patten {
  margin: 10px 0 0;
}
.patten li {
  display: -webkit-box!important;
  display: -webkit-flex!important;
  display: -ms-flexbox!important;
  display: flex!important;
  font-size: 14px;
  border-bottom: 1px solid #f5f5f5;
  height: 48px;
  line-height: 48px;
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
  text-align: left;
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
  border-top: 1px solid #f2f2f2;
  text-align: right;
  padding-right: 10px;
  font-size: 14px;
}
.actionBar .bprice span {
  color: #ff5b06;
  font-size: 16px;
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
