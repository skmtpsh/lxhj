<template>
  <div class="page">
    <header id="header" :style="{'background-color': authList.appColor}">
      <h5>当前预授信额度(元)</h5>
      <h4><countup v-if="authList && authList.creditSum >= 0" :start-val="0" :start="true" :end-val="authList.creditSum" :duration="1.5"></countup></h4>
      <div class="authItemBox">
        <ul class="authNum">
          <li>
            <h6>{{authList.authNumber || 0}}</h6>
            <p>已完成认证</p>
          </li>
          <li>
            <h6>{{authList.unauthNumber || 0}}</h6>
            <p>未完成认证</p>
          </li>
        </ul>
        <div class="authItemBg"></div>
      </div>
    </header>
    <main class="content">
      <div class="authBaseTit">
        <h2>基础认证</h2>
        <p>完成基础认证，即可获得（全部）专属额度</p>
      </div>
      <ul class="authItem">
        <li v-if="authList&&authList.baseAuth" v-for="(item, index) in authList.baseAuth" :key="index">
          <div class="icon-cont">
            <div class="icon-main" :class="filterToStatus(item) ? item.verifyType : ''">
              <img v-if="filterToStatus(item)" :src="require(`@/asset/${item.verifyType}_hover.png`)" class="icon-logo" />
              <img v-else :src="require(`@/asset/${item.verifyType}.png`)" class="icon-logo" />
            </div>
          </div>
          <div>
            <h2 class="authTit" :class="filterToStatus(item) ? 'authas' : ''">{{item.verifyName}}</h2>
            <p class="authIntro">{{item.creditLineDepict}} <span class="price" :class="filterToStatus(item) ? 'authas' : ''">{{item.creditLine}}</span> 元</p>
          </div>
          <div class="authBtn" @click="handleClick(item)">
            <span class="authtxt" :class="filterToClass(item)">{{filterToText(item)}}</span>
            <svg-icon icon-class="arrow" v-if="!filterToStatus(item)" />
          </div>
        </li>
      </ul>
    </main>
    <main class="content">
      <div class="authBaseTit">
        <h2>提额认证</h2>
        <p>完成提额认证，可大幅提升借款额度</p>
      </div>
      <ul class="authItemAdvance">
        <li v-if="authList&&authList.advancedAuth" v-for="(item, index) in authList.advancedAuth" :key="index" @click="handleClick(item, 'advance')">
          <div class="icon-main">
            <img v-if="filterToStatus(item)" :src="require(`@/asset/${item.verifyType}_hover.png`)" class="icon-logo" />
            <img v-else :src="require(`@/asset/${item.verifyType}.png`)" class="icon-logo" />
          </div>
          <p :class="filterToStatus(item) ? 'authas' : ''">{{item.verifyName}}</p>
        </li>
      </ul>
    </main>
    <footer id="footer"><i class="icon"></i> 所有信息仅用于身份验证</footer>
  </div>
</template>
<script>
import indexApi from '@/api/index'
import myMixin from '@/views/mixin'
// 10 未认证 ; 11 认证中 ; 12 已失效；20 已认证
const STATUS_SUCESS = '20'
const STATUS_FAIL = '10'
const STATUS_DOING = '11'
const STATUS_UNABLE = '12'
export default {
  mixins: [myMixin],
  data () {
    return {
      authList: {}
    }
  },
  created () {
    this.$vux.loading.show({
      text: '数据加载..'
    })
    indexApi.getIndex()
      .then((response) => {
        this.$vux.loading.hide()
        let res = response.data
        if (res.code === 200) {
          this.authList = res.datas
          // 基础认证排序
          this.authList.baseAuth && this.authList.baseAuth.sort((a, b) => {
            return a.order - b.order
          })
          // 提额认证排序
          this.authList.advancedAuth && this.authList.advancedAuth.sort((a, b) => {
            return a.order - b.order
          })
          let noStatusArr // 把未认证其他项 和 未认证过的身份认证 的选出来 运营商为已失效也要加进去
          noStatusArr = this.authList.baseAuth.filter((item) => {
            return item.verifyStatus === '10' || item.verifyStatus === '12' || (item.verifyStatus === '20' && (item.verifyStatusLive && item.verifyStatusLive !== '20'))
          })
          this.noStatusArr = noStatusArr.length > 0 ? noStatusArr : null
        } else {
          this.$vux.toast.text(res.message, 'middle')
        }
      })
      .catch((error) => {
        this.$vux.loading.hide()
        this.$vux.toast.text(error, 'middle')
      })
  },
  methods: {
    handleClick (item, type = 'base') {
      /**
       * 1. 前一项是否认证
       * 2. 基础认证是否通过
       * 3. 认证提示信息
       */
      // 高级认证须基础认证先认证
      if (type === 'advance') {
        let pass = this.authList.baseAuth.every((item) => {
          let boolPass = false
          if (item.verifyType === 'statusIdentity') {
            if (item.verifyStatusLive === STATUS_SUCESS && item.verifyStatus === STATUS_SUCESS) {
              boolPass = true
            }
          } else {
            if (item.verifyStatus === STATUS_SUCESS) {
              boolPass = true
            }
          }
          return boolPass
        })
        if (!pass) {
          this.$vux.toast.text('请先认证基础项', 'middle')
          return false
        }
      }
      // 判断是否认证
      let strSuccessTip = '此项已认证'
      if (item.verifyType === 'statusIdentity') {
        if (item.verifyStatusLive === STATUS_SUCESS && item.verifyStatus === STATUS_SUCESS) {
          this.$vux.toast.text(strSuccessTip, 'middle')
          return false
        }
      } else {
        if (item.verifyStatus === STATUS_SUCESS) {
          this.$vux.toast.text(strSuccessTip, 'middle')
          return false
        }
      }
      // 第一项是否认证
      if (type === 'base') {
        if (this.noStatusArr.length > 0) {
          let prePass = true
          let preAuth = this.noStatusArr[0]
          if (item.verifyType === preAuth.verifyType) { // 点击项与第一项一样时候
            prePass = true
          } else { // 点击项与第一项不一样时候
            if (preAuth.verifyType === 'statusIdentity') { // 身份认证
              if (preAuth.verifyStatusLive === STATUS_SUCESS && preAuth.verifyStatus === STATUS_SUCESS) {
                prePass = true
              } else {
                prePass = false
              }
            }
            if (preAuth.verifyStatus !== STATUS_SUCESS) {
              prePass = false
            }
          }
          if (!prePass) {
            this.$vux.toast.text(preAuth.verifyName + '需要先认证', 'middle')
            return false
          }
        }
      }
      // 是否认证通过之后
      this.gotoURL(item.verifyType, item.verifyStatusLive, item.verifyStatus)
    },
    filterToText (item) {
      if (item.verifyType === 'statusIdentity') { // 如果是身份认证判断活体和身份证
        if (item.verifyStatusLive === STATUS_SUCESS && item.verifyStatus === STATUS_SUCESS) {
          return '已认证'
        } if (item.verifyStatusLive === STATUS_UNABLE && item.verifyStatus === STATUS_SUCESS) {
          return '已失效'
        } else {
          return '去认证'
        }
      }
      if (item.verifyStatus === STATUS_SUCESS) {
        return '已认证'
      } else if (item.verifyStatus === STATUS_FAIL) {
        return '去认证'
      } else if (item.verifyStatus === STATUS_UNABLE) {
        return '已失效'
      } else if (item.verifyStatus === STATUS_DOING) {
        return '认证中'
      }
    },
    filterToStatus (item) {
      if (item.verifyType === 'statusIdentity') { // 如果是身份认证判断活体和身份证
        if (item.verifyStatusLive === STATUS_SUCESS && item.verifyStatus === STATUS_SUCESS) {
          return true
        } else {
          return false
        }
      }
      if (item.verifyStatus === STATUS_SUCESS) {
        return true
      }
      return false
    },
    filterToClass (item) { // 判断颜色
      if (item.verifyType === 'statusIdentity') { // 如果是身份认证判断活体和身份证
        if (item.verifyStatusLive === STATUS_SUCESS && item.verifyStatus === STATUS_SUCESS) {
          return 'green'
        } if (item.verifyStatusLive === STATUS_UNABLE && item.verifyStatus === STATUS_SUCESS) {
          return 'red'
        } else {
          return 'blue'
        }
      }
      if (item.verifyStatus === STATUS_SUCESS) {
        return 'green'
      }
      if (item.verifyStatus === STATUS_FAIL) {  // 按顺序查找未认证然后第一个为蓝色默认为灰色
        if (this.noStatusArr && this.noStatusArr[0].verifyType === item.verifyType) {
          return 'blue'
        } else {
          return ''
        }
      } else if (item.verifyStatus === STATUS_UNABLE) {
        return 'red'
      } else if (item.verifyStatus === STATUS_DOING) {
        return 'blue'
      }
    }
  },
  beforeCreate () {
    document.getElementsByTagName('body')[0].className = 'main'
  }
}
</script>
<style lang="less">
@import url('../style/theme.less');
@import url('../style/variable.less');
#header {
  background-color: @normal-color;
  text-align: center;
  padding: 28px 0px 0;
  h5 {
    .font-dpr(24px);
    color: rgba(255, 255, 255, .5)
  }
  h4 {
    color: #fff;
    .font-dpr(64px);
    margin: 16px 0 40px;
  }
  .authItemBox {
    position: relative;
    .authItemBg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      opacity: .05;
      z-index: 2;
    }
    .authNum {
      display: flex;
      position: relative;
      z-index: 3;
      li {
        padding: 16px 0;
        position: relative;
        flex: 1;
        &:first-child:before {
          .setRightLine()
        }
        h6 {
          .font-dpr(40px);
          color: #fff;
          margin-bottom: 12px;
        }
        p {
          .font-dpr(24px);
          color: rgba(255, 255, 255, .5)
        }
      }
    }
  }
}
#footer {
  .font-dpr(24px);
  text-align: center;
  padding: 40px 0 120px;
}
.content {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  .authBaseTit {
    padding: 20px;
    h2 {
      .font-dpr(36px);
      margin-top: 20px;
      color: @text-main-color;
    }
    p {
      .font-dpr(24px);
      margin: 18px 0;
      color: @text-sub-color;
    }
  }
  .authItem {
    li {
      display: flex;
      &>div {
        flex: 1;
        justify-content: center;
        padding: 24px 0;
        position: relative;
        &:not(:first-child):after {
          .setBottomLine();
        }
      }
      .authIntro {
        .font-dpr(24px);
        line-height: 1;
        color: @text-sub-color;
        .price {
          .font-dpr(28px);
          &.authas {
            color: @warning-color;
            display: inline-block;
            vertical-align: baseline;
          }
        }
      }
      .authTit {
        .font-dpr(30px);
        margin-bottom: 14px;
        color: @text-sub-color;
        &.authas  {
          color: @text-main-color;
        }
      }
      .authBtn {
        flex: none;
        display: flex;
        align-items: center;
        width: 140px;
        justify-content: flex-start;
        .authtxt {
          // font-size: 28px;
          .font-dpr(28px);
          color: @text-sub-color;
          position: relative;
          &.red {
            color: @danger-color;
          }
          &.green {
            color: @success-color;
          }
          &.blue {
            color: @normal-color;
          }
        }
        .svg-icon {
          margin-left: 20px;
          margin-right: -20px;
        }
      }
    }
    .icon-cont {
      flex: none;
      margin: 0 26px 0 12px;
      border-bottom: 0 none;
    }
  }
  .authItemAdvance {
    display: flex;
    margin: 40px 0;
    li {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      p {
        margin-top: 16px;
        .font-dpr(28px);
        color: @text-sub-color;
        &.authas {
          color: @text-main-color;
        }
      }
    }
  }
  .icon-main {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    &.statusIdentity {
      background-color: #e4edfe;
    }
    &.statusContacts {
      background-color: #eaffea;
    }
    &.statusBasic {
      background-color: #e9efff;
    }
    &.statusTelecomOperator {
      background-color: #fcf3da;
    }
    &.statusZhima {
      background-color: #e6f0ff;
    }
    &.statusTaobao {
      background-color: #fff0e4;
    }
    &.statusCertification {
      background-color: #e9efff;
    }
    .icon-logo {
      display: block;
      width: 42px;
      height: 42px;
    }
  }
}
</style>
