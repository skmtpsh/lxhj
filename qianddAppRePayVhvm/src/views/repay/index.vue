<template>
  <div>
  <div class="drop-down" v-if="dropDown" >
    <div v-if="loadingtxt">松手刷新数据</div>
    <inline-loading v-if="loading"></inline-loading>
  </div>
  <div class="page" ref="wrapper">
    <div>
      <header class="header">
        <h4>待还总金额(元)</h4>
        <h3>4,200.75</h3>
        <ul class="payItem">
          <li class="vux-1px-r">
            <h5>1,000.00</h5>
            <h4>短贷金额(元)</h4>
          </li>
          <li>
            <h5>3,200.75</h5>
            <h4>短贷金额(元)</h4>
          </li>
        </ul>
      </header>
      <main class="content">
        <section class="paylist">
          <section class="payitem">
            <div class="index-container">
              <flexbox class="payTit"><flexbox-item class="payflex"><span class="badgedanger">短贷</span>应还金额</flexbox-item></flexbox>
              <flexbox class="payPrice">
                <flexbox-item>
                  <span class="font75">1625.00</span>
                </flexbox-item>
                <flexbox-item class="text-right">
                  <a href="javascript:;" class="payButton">立即还款</a>
                </flexbox-item>
              </flexbox>
              <flexbox class="payDate"><flexbox-item>还款日 2018-08-27</flexbox-item></flexbox>
            </div>
          </section>
          <section class="payitem">
            <div class="dangerBox">您已逾期 3 天，请及时还款以免造成不必要的损失<router-link to="/apply"><span class="badgewarning">申请展期</span></router-link></div>
            <div class="index-container">
              <flexbox class="payTit"><flexbox-item class="payflex"><span class="badgedanger">短贷</span>应还金额</flexbox-item></flexbox>
              <flexbox class="payPrice">
                <flexbox-item>
                  <span class="font75 color-danger">1625.00</span>
                </flexbox-item>
                <flexbox-item class="text-right">
                  <a href="javascript:;" class="payButtonDanger">立即还款</a>
                </flexbox-item>
              </flexbox>
              <flexbox class="payDate"><flexbox-item>还款日 2018-08-27</flexbox-item></flexbox>
            </div>
          </section>
          <section class="payitem">
            <div class="index-container">
              <flexbox class="payTit"><flexbox-item class="payflex"><span class="badgenormal">现金</span>应还金额</flexbox-item></flexbox>
              <flexbox class="payPrice">
                <flexbox-item>
                  <span class="font75">1625.00</span>
                </flexbox-item>
                <flexbox-item class="text-right">
                  <a href="javascript:;" class="payButton">立即还款</a>
                </flexbox-item>
              </flexbox>
              <flexbox class="payDate"><flexbox-item>还款日 2018-08-27</flexbox-item></flexbox>
              <ul class="paylist">
                <li class="vux-1px-r"><router-link to="/item"><h4><svg-icon icon-class="list" /> 每期还款</h4></router-link></li>
                <li><router-link to="/advance"><h4><svg-icon icon-class="list_check" /> 提前还清</h4></router-link></li>
              </ul>
            </div>
          </section>
        </section>
      </main>
    </div>
  </div>
  </div>
</template>
<script>
// import Scroll from '@/components/scroll/scroll'
import { InlineLoading } from 'vux'
import BScroll from 'better-scroll'
export default {
  components: {
    InlineLoading
  },
  data () {
    return {
      probeType: 3,
      dropDown: false,
      loading: false,
      loadingtxt: true
    }
  },
  created () {
    this.scrollFn()
  },
  methods: {
    scrollFn () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            pullDownRefresh: {
              threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
              stop: 50 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
            },
            click: true,
            scrollY: true,
            momentum: true,
            probeType: 3
          })
        } else {
          this.scroll.refresh()
        }
        this.scroll.on('scroll', (pos) => {
          console.log(pos)
          if (pos.y > 50) {
            this.dropDown = true
          } else {
            this.dropDown = false
          }
        })
        // touchEnd（手指离开以后触发） 通过这个方法来监听下拉刷新
        this.scroll.on('touchEnd', (pos) => {
          if (pos.y > 50) {
            this.loading = true
            this.loadingtxt = false
          }
        })
        this.scroll.on('pullingDown', () => {
          setTimeout(() => {
            this.scroll.finishPullDown()
            this.scroll.refresh()
            this.loading = false
            this.loadingtxt = true
          }, 1000)
        })
      })
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import '../../style/variable.less';
.page {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.drop-down{
  position: absolute;
  top:10px;
  width: 100%;
  height: 60px;
  line-height:60px;
  text-align: center;
  font-size: 36px;
  color:#CCC;
}
.header {
  // background-image: url('../../assets/header.jpg');
  // background-size: 100%;
  background-color: @header-background-color;
  text-align: center;
  padding: 30px;
  h4 {
    font-size: 42px;
    margin: 30px 0 0;
    color: @color-white;
    color: rgba(255, 255, 255, .8)
  }
  h3 {
    font-size: 99px;
    margin: 60px 0 0;
    color: @color-white
  }
  h5 {
    color: @color-white;
    font-size: 60px;
  }
  .payItem {
    .flexitem(90px, 30px);
  }
}
.content {
  .dangerBox {
    .dangerbox()
  }
  .badgewarning {
    margin-left: 30px;
    .badge(#ef250f, #ffe7e4);
  }
  .index-container {
    padding: 60px 30px 0px;
    margin-bottom:60px;
    background-color: @color-white;
    position:relative;
    overflow: hidden;
    .payTit, .payPrice {
      margin-bottom: 30px;
    }
    .payflex {
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .payTit {
      font-size: 48px;
      line-height: 1;
    }
    .payDate {
      font-size: 42px;
      color: #979eac;
      margin-bottom: 60px;
    }
    .badgedanger {
      margin-right: 30px;
      .badge()
    }
    .badgenormal {
      margin-right: 30px;
      .badge(#456df1, #f3f6ff)
    }
    .paylist {
      position: relative;
      padding: 24px 0;
      .flexitem();
      margin-top: 60px;
      &:before {
        .setTopLine(#c7c7c7);
      }
      h4 {
        .svg-icon {
          color: #979eac
        }
        color: #333333;
        font-size: 48px;
        padding: 18px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .payButton {
      .btnpay()
    }
    .payButtonDanger {
      .btnpay(#ff5542, #ef250f)
    }
  }
}
</style>
