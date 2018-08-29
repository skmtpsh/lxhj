<template>
<div class="page">
  <spinner :visible="loading.isLoading" :fixed="true" :text="loading.loaddingMsg"></spinner>
  <div class="container">
    <div class="group-warp">
      <my-swiper :lists="imgList"></my-swiper>
      <!-- Swiper -->
      <div class="prowrap">
        <h1 class="protit">{{detail.name}}</h1>
        <div class="price">
          <span class="price large_size">¥<em>{{detail.monthAmount}} / 月</em></span>
        </div>
      </div>
    </div>
    <div class="group-warp">
      <div class="skuwrap">
        <ul class="skuListWrap">
          <li>
            <h2 class="skutit">套餐</h2>
            <div class="skugroup" id="colorType">
              <a href="javascript:;" @click="selRadio(item.id)" :class="{'sel':isSel == item.id}" data-id="item.id" class="radiobtn" v-for="(item, index) in detail.setList" v-bind:key="index">{{item.name}}</a>
            </div>
          </li>
          <li>
            <h2 class="skutit">租期</h2>
            <div class="skugroup" id="monthType">
              <a href="javascript:;" :data-id="detail.code" class="radiobtn sel">{{detail.code}}个月</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="group-wrap" style="padding: 10px 0;">
      <div class="detail-header-bg">
        <div class="header-dom transparent" id="headdom">
          <div class="flex main-dom">
            <ul class="header-nav" id="headnav">
              <li :class="{'active':iscur == 0}" @click="tab(0)">商品介绍</li>
              <li :class="{'active':iscur == 1}" @click="tab(1)">规格参数</li>
              <li :class="{'active':iscur == 2}" @click="tab(2)">租赁说明</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="detailWrap" id="detailwrap">
        <div class="detailSlide" :class="{'show':iscur == 0}">
          <div>
            <img :src="item.imgUrl" v-for="(item, index) in imgContList" v-bind:key="index" />
          </div>
        </div>
        <div class="detailSlide" :class="{'show':iscur == 1}">
          <div v-html="detail.specification"></div>
        </div>
        <div class="detailSlide" :class="{'show':iscur == 2}">
          <div>
            <div style="background:#f6f6f6; margin:0 -20px 30px; ">
              <ul class="ggstep">
                <li>
                  <i class="ggico ggico1"></i>
                  <p>挑选机型</p>
                </li>
                <li>
                  <i class="ggico ggico2"></i>
                  <p>信用评估</p>
                </li>
                <li>
                  <i class="ggico ggico3"></i>
                  <p>月付押金</p>
                </li>
                <li class="last">
                  <i class="ggico ggico4"></i>
                  <p>买断</p>
                </li>
              </ul>
            </div>
            <h2 style="font-size:14px; margin:10px 0;">1、故障、损坏、被盗、丢失怎么办？</h2>
            <div style="line-height:24px; color:#999;">
            正常设备折旧，设备自然产生的硬件故障由商家免费更换，软件
            问题由商家协助。人为损坏，拆解，划痕等问题，租户承担配件
            成本和维修费用以及维修期间的租赁费用。粉碎性破坏，丢失按
            设备市场价格赔偿
            </div>
            <h2 style="font-size:14px; margin:10px 0;">2、租期是从哪一天算起？</h2>
            <div style="line-height:24px; color:#999;">租期是从租户签收当天起算（正常是按快递送过当天，由租户原
因延误签收的时间，计算在租期内），例如租户下单日期为18号
20号签收，从20号起算租期
            </div>
            <h2 style="font-size:14px; margin:10px 0;">3、怎么续租？</h2>
            <div style="line-height:24px; color:#999;">订单到期后，租户可以在翼租商城内找到此商品重新下单，备注
续租即可，或者是联系客服进行续租
            </div>
            <h2 style="font-size:14px; margin:10px 0;">4、设备出现故障怎么办？维修费用谁承担？</h2>
            <div style="line-height:24px; color:#999;">设备出现故障，请联系客服报修，自然故障维修由翼租承担，客
户在使用过程中出现的故障由客户自己承担
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <section class="alert" :class="{show: isTel}">
    <div class="addrbody">
      400-189-0017
    </div>
    <div class="addrfoot">
      <a class="btnback" @click="isTel = false">取消</a>
      <a class="btngo"  @click="goTel">去拨打</a>
    </div>
  </section> -->
  <section class="actionBar-bg">
    <section class="actionBar">
        <div class="actionBarWrap">
          <div class="bprice price"><span>月供：{{detail.monthAmount}}元</span></div>
          <div class="btrade">
            <span class="cell" @click="goTel"><i class="icon"></i>客服</span>
            <span class="buy" @click="buyNow" id="buyBtn">立即租赁</span>
          </div>
        </div>
      </section>
  </section>
</div>
</template>
<script>
import * as getProduct from '@/api/product'
import mySwiper from '@/components/swiper'
import Spinner from '@/components/spinner'
// import Cookies from 'js-cookie'
import LocalStorage from 'localStorage'

export default {
  name: 'detailpro',
  components: {
    Spinner,
    mySwiper
  },
  data () {
    return {
      detail: {},
      imgList: [],
      imgContList: [],
      iscur: 0,
      isSel: '',
      isTel: false,
      loading: {
        loaddingMsg: '',
        isLoading: false
      }
    }
  },
  computed: {
  },
  methods: {
    goTel () {
      let type = parseInt(this.$route.query.type)
      if (type === 0) { // andriod
        window.yilease.goPhone()
      }
      if (type === 1) { // ios
        window.webkit.messageHandlers.goPhone.postMessage(null)
      }
    },
    tab (num) {
      this.iscur = num
    },
    selRadio (id) {
      this.isSel = id
    },
    buyNow () {
      // Cookies.set('product', JSON.stringify(this.detail))
      this.loading.isLoading = true
      LocalStorage.setItem('product', JSON.stringify(this.detail))
      setTimeout(() => {
        this.loading.isLoading = false
        let type = parseInt(this.$route.query.type)
        if (type === 0) { // andriod
          window.yilease.createOrder()
        }
        if (type === 1) { // ios
          window.webkit.messageHandlers.createOrder.postMessage(null)
        }
      }, 800)
    },
    watchScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      document.querySelector('#headdom').setAttribute('data-fixed', scrollTop >= this.offsetTop ? 'fixed' : '')
      // if (scrollTop > offsetTop) {
      //   this.searchBarFixed = true
      // } else {
      //   this.searchBarFixed = false
      // }
    }
  },
  filters: {
  },
  created () {
    let reg = /^[1-9]\d*$/
    if (!reg.test(this.$route.params.goodid)) {
      // alert('请输入正确商品ID')
      return false
    }
    let paramID = this.$route.params.goodid
    getProduct.getDetailPro(paramID)
      .then((response) => {
        if (response.data.code === '0') {
          this.detail = response.data.data
          if (response.data.data.setList.length > 0) {
            this.isSel = response.data.data.setList[0].id
          }
          this.imgList = this.detail.imageList.filter((imgObj) => {
            return imgObj.imgType === 1
            // return imgObj.createBy === '1'
          })
          this.imgContList = this.detail.imageList.filter((imgObj) => {
            return imgObj.imgType === 2
            // return imgObj.createBy === '1'
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  mounted () {
    this.$nextTick(() => {
      this.offsetTop = document.querySelector('#headdom').offsetTop
      window.addEventListener('scroll', this.watchScroll, true)
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.watchScroll, true)
  }
}
</script>
<style scoped>
.page {
  /* -webkit-overflow-scrolling: touch; */
}
.ggstep {
  padding: 30px;
  display: -webkit-box!important;
  display: -webkit-flex!important;
  display: -ms-flexbox!important;
  display: flex!important;
}
.ggstep li {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  position: relative;
  padding: 0 12px 0 0;
}
.ggstep li:after {
  content: " ";
  position: absolute;
  right: -6px;
  top: 16px;
  width: 0;
  height: 0;
  overflow: hidden;
  font-size: 0;     /*是因为, 虽然宽高度为0, 但在IE6下会具有默认的 */
  line-height: 0;  /* 字体大小和行高, 导致盒子呈现被撑开的长矩形 */
  border-width: 6px;
  border-style: solid;  /*ie6下会出现不透明的兼容问题*/
  border-color: transparent transparent transparent #9e9e9e;
}
.ggstep li.last:after {
  content: none
}
.ggico {
  background-size: 100%;
  display: block;
  width: 25px;
  height: 25px;
  margin: 5px auto 0;
  position: relative
}
.ggico1 {
  background: url(../../assets/gg1.jpg) no-repeat center center;
}
.ggico2 {
  background: url(../../assets/gg2.jpg) no-repeat center center;
}
.ggico3 {
  background: url(../../assets/gg3.jpg) no-repeat center center;
}
.ggico4 {
  background: url(../../assets/gg4.jpg) no-repeat center center;
}
.ggstep li p {
  color: #999;
  height: 30px;
  line-height: 30px;
}
.alert.show {
  background: #fff;
  z-index: 1001;
  width: 60%;
  margin: 40% auto 0;
  -webkit-box-shadow: 0 0px 8px rgba(0,0,0,0.5);
  box-shadow: 0 0px 8px rgba(0,0,0,0.5);
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
  padding: 2px;
  height: 40px;
  line-height: 40px;
  text-align: center
}
.addrfoot a.btngo {
  color: #ff5b06;
}
.actionBar-bg:after {
  content: " ";
  display: block;
  height: 50px;
  /* padding-top: var(--safe-area-inset-bottom) */
}
.container {
  position: relative;
}
.container .group-warp {
  margin-bottom: 10px
}
.page .container,.page .content {
  background: #f5f5f5
}
.header-dom {
  opacity: 1;
}
.detail-header-bg {
  height: 44px;
  /* margin-top: -44px */
}
.header-dom.fixed {
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
}
#headdom[data-fixed="fixed"]{
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
}
.header-dom {
  line-height: 44px;
  height: 44px;
  overflow: visible
}
.header-dom .main-dom {
  -webkit-transition: background-color ease .3s;
  transition: background-color ease .3s;
  background: -webkit-linear-gradient(rgba(0,0,0,.15),transparent);
  background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.15)),to(transparent));
  background: -moz-linear-gradient(rgba(0,0,0,.15) 0,transparent 100%);
  background: linear-gradient(rgba(0,0,0,.15),transparent);
  padding-top: var(--safe-area-inset-top)
}
.header-dom.transparent .main-dom {
  background: #fff;
  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,.05),0 .5px 0 rgba(0,0,0,.09);
  box-shadow: 0 1px 0 rgba(0,0,0,.05),0 .5px 0 rgba(0,0,0,.09)
}
.header-dom .header-nav {
  text-align: center;
  font-size: 16px;
  opacity: 0;
  -webkit-transition: opacity ease .2s;
  transition: opacity ease .2s;
  display: -webkit-box!important;
  display: -webkit-flex!important;
  display: -ms-flexbox!important;
  display: flex!important;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}
.header-dom .header-nav li {
  color: #999;
  height: 44px;
  line-height: 44px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-bottom: 2px solid #fff
}

.header-dom .header-nav .active {
  color: #ff5b06;
  border-color: #ff5b06
}

.header-dom .header-nav .active::before {
  color: currentColor
}
.header-dom.transparent .header-nav {
  opacity: 1
}
.skuwrap,.prowrap {
  background: #fff;
  padding: 5px 10px 10px;
  position: relative
}
.prowrap .protit {
  color: #333333;
  position: relative;
  overflow: hidden;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px
}
.prowrap .price {
  height: 36px;
  line-height: 36px
}
.prowrap .price {
  font-size: 14px;
  color: #ff5b06;
  font-weight: 700;
  display: inline-block
}
.prowrap .price em {
  margin-left: 5px;
  font-size: 20px;
}
.skutit {
  color: #000;
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 10px;
  padding-top: 10px
}
.radiobtn {
  position: relative;
  display: inline-block;
  border: 1px solid #999999;
  background-color: #fff;
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 14px;
  margin: 0 8px 8px 0;
  color: #555
}
.radiobtn.sel {
  color: #fff;
  border: 1px solid #ff5b06;
  background-color: #ff5b06;
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
.btrade .cell {
  display: block;
  box-sizing: border-box;
  max-width: 80px;
  flex: 1;
  height: 50px;
  color: #999;
  line-height: normal;
  font-size: 12px;
  padding-top: 3px;
  background-color: #fafafa;
  /* border-top: 1px solid #f2f2f2; */
  border-left:1px solid #f2f2f2
}
.btrade .icon {
  background: url(../../assets/icon.png) no-repeat center center;
  background-size: 100%;
  display: block;
  width: 20px;
  height: 25px;
  margin: 5px auto 0;
  position: relative
}
.btrade .buy {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  color: #fff;
  background-color: #ff5b06
}
.detailWrap {
  overflow: hidden;
  /* display: table; */
  word-wrap: break-word;
  word-break: break-all;
  line-height: 1.5;
  font-size: 14px;
  padding: 0 10px;
  background-color: #fff;
}

.detailWrap img {
  display: block;
  max-width: 100%;
  -webkit-user-select: none;
  user-select: none
}

.detailWrap table {
  width: 100%;
}
.detailSlide {
  display: none;
  min-height: 100vh;
}
.detailSlide img {
  max-width: 100%;
}
.show {
  display: block;
}
.hide {
  display: none;
}
</style>
