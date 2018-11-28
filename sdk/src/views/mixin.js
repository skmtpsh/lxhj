import getURLApi from '@/api/mixin'
var commonMixin = {
  methods: {
    gotoURL: function (verifyType, verifyStatusLive = 0, verifyStatus = 0) {
      const STATUS_SUCESS = '20'
      const STATUS_FAIL = '10'
      // const STATUS_DOING = '11'
      const STATUS_UNABLE = '12'
      // let gotoURL = ''
      switch (verifyType) {
        case 'statusIdentity': // 身份认证
          let state = '0'
          if (verifyStatusLive === STATUS_FAIL && verifyStatus === STATUS_FAIL) {
            state = '0'
          }
          if (verifyStatusLive === STATUS_FAIL && verifyStatus === STATUS_SUCESS) {
            state = '1'
          }
          if (verifyStatusLive === STATUS_UNABLE && verifyStatus === STATUS_SUCESS) {
            state = '1'
          }
          if (this.$route.query.platform === 'ios') {
            window.webkit.messageHandlers.OpenIdCertification.postMessage(state)
          } else {
            window.javaObj.identityAuth(state)
          }
          break
        case 'statusContacts': // 紧急联系人
          this.$router.push({path: '/authentication/emergency', query: this.$route.query})
          break
        case 'statusBasic': // 基本信息
          this.$router.push({path: '/authentication/baseinfo', query: this.$route.query})
          break
        case 'statusBasicOther': // 证件照片
          this.$router.push({path: '/authentication/upload', query: this.$route.query})
          break
        case 'statusCertification': // 实名认证
          this.$router.push({path: '/authentication/identify', query: this.$route.query})
          break
        default:
          this.$vux.loading.show({
            text: '数据加载..'
          })
          getURLApi[verifyType]()
          .then((response) => {
            this.$vux.loading.hide()
            let res = response.data
            if (res.code === 200) {
              // if (this.$route.query.platform === 'ios') {
              //   window.webkit.messageHandlers.setTitle.postMessage(res.datas.verifyTitle)
              // } else {
              //   window.javaObj.setTitle(res.datas.verifyTitle)
              // }
              window.location.href = res.datas.verifyUrl
            } else {
              this.$vux.toast.text(res.message, 'middle')
            }
          })
          .catch((error) => {
            this.$vux.loading.hide()
            this.$vux.toast.text(error, 'middle')
          })
          break
      }
    }
  }
}

export default commonMixin
