<template>
  <div class="page main">
    <section class="pagehead">
      <img src="../assets/header.jpg" class="img" />
    </section>
    <section class="log">
      <div class="wrap">
        <flexbox :gutter="0">
          <flexbox-item><x-input type="tel" v-model="tel" novalidate class="input" :max='11' placeholder="请输入您的手机号"></x-input></flexbox-item>
        </flexbox>
        <flexbox :gutter="0">
          <flexbox-item :span="4/7">
            <x-input type="text" novalidate  v-model="checkcode" class="input" placeholder="手机验证码"></x-input>
          </flexbox-item>
          <flexbox-item :span="3/7" class="input"><x-button type="primary" action-type="button" @click.native="getSms" :disabled="smsObj.disabled">{{smsObj.text}}</x-button></flexbox-item>
        </flexbox>        
        <flexbox :gutter="0">
          <flexbox-item><x-input type="password" v-model="pwd" novalidate class="input" placeholder="请设置6-12位字母与数字的组合密码"></x-input></flexbox-item>
        </flexbox>
      </div>
    </section>
    <section class="logbtn">
      <div class="wrap">
       <a href="javascript:;" class="btn" @click="regNow"></a>
      </div>      
      <img src="../assets/log.jpg" class="img" />
    </section>    
  </div>
</template>
<script>
import moment from 'moment'
import md5 from 'js-md5'
import baseApi from '@/api/home'
import { XInput, XButton, Flexbox, FlexboxItem, Toast } from 'vux'
export default {
  components: {
    Toast,
    XInput,
    XButton,
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      tel: '',
      pwd: '',
      checkcode: '',
      isPost: false,
      smsObj: {
        text: '获取验证码',
        disabled: false
      }
    }
  },
  created () {
    // 手机正则
    this.regTel = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[789])\d{8}$/
    // 密码正则
    this.regPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/
    this.query = this.$route.query
  },
  methods: {
    onBlur () {
    },
    setParams () {
      let AppID = 'webnrdq1oo9us3ki'
      let TimeStamp = moment(Date.now()).format('YYYYMMDDHHmmss')
      let AppKey = '4a1ace4dfe4c960c51e0c788903619ca'
      let SignSystem = md5(AppKey + AppID + TimeStamp)
      return {
        appId: AppID,
        timestamp: TimeStamp,
        signSystem: SignSystem
      }
    },
    getSms () {
      if (Object.keys(this.query).length === 0) {
        this.$vux.toast.text('页面参数不正确', 'middle')
        return false
      }
      if (!this.regTel.test(this.tel)) {
        this.$vux.toast.text('输入正确的手机号格式', 'middle')
        return false
      }
      this.authTime = 120
      baseApi['registSmsCode'](Object.assign(this.setParams(), {
        phone: this.tel
      }))
        .then((response) => {
          if (response.data.code === '0') {
            this.$vux.toast.text(response.data.msg, 'middle')
            // 设置短信倒计时
            let authTimeTimer = setInterval(() => {
              this.smsObj.text = this.authTime + '秒重发送'
              this.smsObj.disabled = true
              this.authTime--
              if (this.authTime <= 0) {
                this.smsObj.text = '获取验证码'
                this.smsObj.disabled = false
                clearInterval(authTimeTimer)
              }
            }, 1000)
          } else {
            this.$vux.toast.text(response.data.msg, 'middle')
          }
          this.$vux.loading.hide()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    regNow () {
      // 设置注册按钮只能点一次
      if (this.isPost === true) {
        return false
      }
      if (!this.regTel.test(this.tel)) {
        this.$vux.toast.text('输入正确的手机号格式', 'middle')
        return false
      }
      if (this.checkcode === '') {
        this.$vux.toast.text('输入手机验证码', 'middle')
        return false
      }
      if (!this.regPwd.test(this.pwd)) {
        this.$vux.toast.text('6-12位字母加数字组合', 'middle')
        return false
      }
      this.$vux.loading.show({
        text: '处理数据中'
      })
      baseApi['registChannel'](Object.assign(this.setParams(), {
        phone: this.tel,
        smsCode: this.checkcode,
        channelCode: this.query.channelCode,
        registAppName: this.query.registAppName
      }))
        .then((response) => {
          if (response.data.code === '0') {
            this.isPost = true
            this.$vux.toast.text('注册成功！', 'bottom')
            setTimeout(() => {
              this.$router.push({path: '/down', query: {phone: this.tel}})
            }, 2500)
          } else {
            this.$vux.toast.text(response.data.msg, 'middle')
          }
          this.$vux.loading.hide()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  beforeCreate () {
    document.getElementsByTagName('body')[0].className = 'main'
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';

.page.main {
  background-color: #fecb00;
  height: 100%;
  padding-bottom: 50px /*no*/
}
.logbtn {
  position: relative;
  .wrap {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0.73rem;
    line-height: 1;
    .btn {
      display: block;
      width: 100%;
      height: 1.57rem;
    }
  }
}
.img {
  max-width: 100%;
  // width: 100%;
}
.pagehead {
  line-height: 0;
}
.log {
  background-image: url('./../assets/body.jpg');
  background-repeat: repeat-y;
  background-size: 100%;
  padding-bottom: .15rem;
}
.wrap {
  padding: 0 0.88rem;
  color: #adadad;
}
.input {
  padding: 0rem 0.2rem 0.28rem
}
.weui-cell.input {
  padding: 0rem 0.2rem 0.28rem
}
.weui-toast__content {
  font-size: 16px !important; /*no*/
}
button.weui-btn {
  font-size: 16px !important; /*no*/
  height: 1.28rem !important;
  background-color: #02b7fe !important;
  border-radius: 10px !important; /*no*/
  box-shadow: 0px 4px 0px #047db4; /*no*/
}
.weui-input {
  font-size: 16px !important; /*no*/
  padding: 0 0.13rem;
  height: 1.28rem !important;
  border-radius: 10px !important; /*no*/
  border: 2px solid #c2921e !important; /*no*/
  box-shadow: 0px 4px 0px #d9c261; /*no*/
}
</style>
