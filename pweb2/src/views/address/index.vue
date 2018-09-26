<template>
  <div class="page">
    <section class="group-wrap" v-if="isShow">
      <ul class="list">
        <li v-for="(item, index) in list" v-bind:key="index">
          <div class="left" @click="getAddr(item)">
            <p class="top">
              <span>{{item.name}}</span>
              <span>{{item.mobile}}</span>
              <span :class = "{default:item.isDefault === '是' }">{{item.isDefault === '是' ? '默认' : ''}}</span>
            </p>
            <p class="address">{{item.address}}</p>
          </div>
          <div class="right" @click="editAddr(item.addressId, item)"></div>
        </li>
      </ul>
    </section>
    <section v-if="!isShow">
      <div class="noinfo"></div>
    </section>
    <section class="actionBar-bg">
      <section class="actionBar">
        <div class="actionBarWrap">
          <div class="btrade" @click="addAddr">
            <div class="btnadd"><span>+</span> 添加收获地址</div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import * as addressApi from '@/api/address'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      list: [],
      isShow: false
    }
  },
  methods: {
    ...mapMutations([
      'setAddr',
      'setModAddr'
    ]),
    addAddr () {
      // {token: this.$route.query.token, userid: this.$route.query.userid}
      this.$router.push({path: `/addr/add`, query: this.qry}) // 跳转到地址列表
    },
    getAddr (item) {
      if (this.qry.type >= 0) { // 1.我的页面里的地址列表调用不能跳转. 2. 确认订单页面页面要跳转
        this.setAddr(item)
        this.$router.push({path: `/order/confirm`, query: this.qry}) // 跳转到确认订单
      }
    },
    editAddr (id, item) {
      this.setModAddr(item)
      this.$router.push({path: `/addr/add/${id}`, query: this.qry}) // 修改跳转到地址列表
    }
  },
  created () {
    this.qry = this.$route.query
    let addrObj = {
      token: this.$route.query.token,
      userId: this.$route.query.userid
    }
    addressApi.getAddrList(addrObj)
      .then((response) => {
        if (response.data.code === '0') {
          this.list = response.data.data
          if (response.data.data.length > 0) {
            this.isShow = true
          }
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.page {
  position: relative;
  padding-top: 10px;
  min-height: 100vh;
}
.noinfo {
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width: 100px;
  height: 130px;
  background: url(../../assets/address.png) no-repeat center center;
}
.btnadd {
  width:100%;
  text-align:center;
}
.btnadd span {
  font-size: 18px;
  color: #fff;
}
.actionBar {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
}
.actionBar-bg:after {
  content: " ";
  display: block;
  height: 50px;
}
.actionBar .actionBarWrap {
  width: 100%;
  height: 50px;
  background-color: #ff5b06;
  line-height: 50px;
  display: -webkit-box;
  display: box;
  display: -webkit-flex;
  display: flex;
  text-align: left;
  color: #fff;
  padding-bottom: var(--safe-area-inset-bottom)
}
.actionBar .bprice {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  border-top: 1px solid #f2f2f2
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
.list li {
  height: 100px;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
  display: -webkit-box!important;
  display: -webkit-flex!important;
  display: -ms-flexbox!important;
  display: flex!important;
}
.list li:last-child {
  border-bottom: 0 none;
}
.list .left {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.list .right {
  width: 50px;
  margin: 0 auto;
  display: block;
  background: url(../../assets/edit.png) no-repeat center center;
  background-size: 50%;
}
.default {
  font-size: 12px;
  color: #fff;
  background: #ff5b06;
  padding: 2px 4px;
  border-radius: 5px;
}
.address {
  color: #999;
  font-size: 14px;
  padding: 5px 0;
  line-height: 1.5
}
.top {
  font-size: 16px;
  height: 32px;
  line-height: 32px;
  color: #333;
}
.right img {
}
.addAddress {
}
.addAddress>span>img {
  width: 16px;
  top: -2px;
  position: relative;
  right: 5px
}
</style>
