<template>
  <div class="page">
    <form>
      <section class="group-wrap" style="padding: 0 10px;">
        <ul class="patten">
          <li><div class="label">收货人</div><div class="inputwrap"><input type="text" v-model="recName" class="inputw" placeholder="请填写收货人" /></div></li>
          <li><div class="label">手机号码</div><div class="inputwrap"><input maxlength="11" type="text" v-model="recMobile" class="inputw" placeholder="请填写手机号码" /></div></li>
          <li><div class="label">详细地址</div><div class="inputwrap"><input type="text" v-model="detailAddress" class="inputw" placeholder="请填写详细地址" /></div></li>
        </ul>
      </section>
      <section class="group-wrap">
        <ul class="patten">
          <li style="height:36px; line-height:36px;">
            <div class="label" style="width:120px;">设置为默认地址</div>
            <div class="inputwrap">
              <div class="swich" :class="{on:isDefault === 1}" @click="isDefault = !isDefault ? 1 : 0">
                <input type="checkbox" v-model="isDefault" />
                <div class="box">
                  <span></span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section class="group-wrap">
        <span class="btnSave" @click="saveAddr">保存地址</span>
      </section>
    </form>
    <section class="bgalert" :class="{show: isMsg}">{{msg}}</section>
  </div>
</template>
<script>
import * as addressApi from '@/api/address'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      recName: '',
      recMobile: '',
      detailAddress: '',
      isDefault: 0,
      msg: '',
      isMsg: ''
    }
  },
  computed: {
    ...mapGetters([
      'modAddress'
    ])
  },
  methods: {
    goAddr () {
      // {token: this.$route.query.token, userid: this.$route.query.userid}
      this.$router.push({path: '/addr', query: this.qry}) // 跳转到地址列表
    },
    saveAddr () {
      if (this.recName === '') {
        this.isMsg = true
        this.msg = '收货人不能为空'
        setTimeout(() => {
          this.isMsg = false
        }, 2000)
        return false
      }
      if (this.recMobile === '') {
        this.isMsg = true
        this.msg = '手机号码不能为空'
        setTimeout(() => {
          this.isMsg = false
        }, 2000)
        return false
      }
      let pattern = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/
      if (!pattern.test(this.recMobile)) {
        this.isMsg = true
        this.msg = '手机号码格式有误'
        setTimeout(() => {
          this.isMsg = false
        }, 2000)
        return false
      }
      if (this.detailAddress === '') {
        this.isMsg = true
        this.msg = '详细地址不能为空'
        setTimeout(() => {
          this.isMsg = false
        }, 2000)
        return false
      }
      let addrObj = {
        token: this.$route.query.token,
        userId: this.$route.query.userid,
        recName: this.recName,
        recMobile: this.recMobile,
        detailAddress: this.detailAddress,
        isDefault: this.isDefault || 0
      }
      if (parseInt(this.edit) >= 0) {
        let modObj = Object.assign({addressId: this.$route.params.id}, addrObj)
        addressApi.editSaveAddr(modObj)
          .then((response) => {
            if (response.data.code === '0') {
              this.isMsg = true
              this.msg = response.data.msg
              setTimeout(() => {
                this.isMsg = false
                this.goAddr()
                // this.$router.push({path: '/addr', query: {token: this.$route.query.token, userid: this.$route.query.userid}}) // 跳转到地址列表
              }, 2000)
            } else {
              this.isMsg = true
              this.msg = response.data.msg
              setTimeout(() => {
                this.isMsg = false
              }, 2000)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        addressApi.addAddr(addrObj)
          .then((response) => {
            if (response.data.code === '0') {
              this.isMsg = true
              this.msg = response.data.msg
              setTimeout(() => {
                this.isMsg = false
                this.goAddr()
                // this.$router.push({path: '/addr', query: {token: this.$route.query.token, userid: this.$route.query.userid}}) // 跳转到地址列表
              }, 2000)
            } else {
              this.isMsg = true
              this.msg = response.data.msg
              setTimeout(() => {
                this.isMsg = false
              }, 2000)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  },
  created () {
    // console.log(this.$route.params.id)
    this.qry = this.$route.query
    this.edit = this.$route.params.id
    if (parseInt(this.edit) >= 0 && Object.keys(this.modAddress).length > 0) {
      // console.log(this.modAddress)
      this.recName = this.modAddress.name
      this.recMobile = this.modAddress.mobile
      this.detailAddress = this.modAddress.address
      this.isDefault = this.modAddress.isDefault === '是' ? 1 : 0
    }
    if (parseInt(this.edit) >= 0 && Object.keys(this.modAddress).length === 0) {
      this.goAddr()
      // this.$router.push({path: '/addr', query: {token: this.$route.query.token, userid: this.$route.query.userid}})
    }
  }
}
</script>
<style scoped>
.page {
  touch-action: none;
  padding-top: 10px;
}
.swich {
  float: right;
  margin-top: 3px;
}
.swich .box {
  width:72px;
  height:30px;
  background:#ccc;
  border-radius:20px;
  transition: all .5s ease;
}
.swich input{
  display:none;
}
.swich .box span {
  display:inline-block;
  height:30px;
  width:30px;
  border-radius:18px;
  background:#fff;
  /* transform:translateX(0px); */
  transform: translateX(-42px);
  transition: all .5s ease;
}
.swich.on .box{
  background:#5bbe3f;
  transition: all .5s ease;
}
.swich.on .box span{
  /* transform:translateX(-42px); */
  transform: translateX(0);
  transition: all .5s ease;
}
.bgalert.show  {
  display: block;
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
  height: 36px;
  line-height: 36px;
  background: #000;
  opacity: .8;
  text-align: center;
  margin: 40% auto 0;
}
.btnSave {
  height: 36px;
  line-height: 36px;
  text-align: center;
  display: block
}
.inputw {
  display: block;
  width: 100%;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  border: none;
  background: none;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0;
}
.patten {
  margin: 0px 0 0;
}
.patten li {
  display: -webkit-box!important;
  display: -webkit-flex!important;
  display: -ms-flexbox!important;
  display: flex!important;
  font-size: 16px;
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
  text-align: right;
  color: #999;
}
</style>
