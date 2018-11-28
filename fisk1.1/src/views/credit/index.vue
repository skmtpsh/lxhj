<template>
  <div class="page" id="fisk" ref="fisk">
    <el-tabs type="border-card" :stretch="true" v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane v-for="(tab, index) in tabList" :key="index" :label="tab.label" :name="tab.name" v-if="tab.show">
        <component :is="tab.component" v-if="show === tab.name"></component>
      </el-tab-pane>
      <!-- <el-tab-pane label="基本信息" name="baseInfo">
        <BaseTag />
      </el-tab-pane>
      <el-tab-pane label="风控报告" name="fiskInfo">
        <FiskTag v-if="show === 'fiskInfo'" />
      </el-tab-pane>
      <el-tab-pane label="运营商报告" name="operateInfo">
        <OperateTag v-if="show === 'operateInfo'" />
      </el-tab-pane>
      <el-tab-pane label="通讯录" name="addressInfo">
        <AddressTag v-if="show === 'addressInfo'" />
      </el-tab-pane>
      <el-tab-pane label="通话记录" name="callInfo">
        <CallTag v-if="show === 'callInfo'" />
      </el-tab-pane>
      <el-tab-pane label="学信网" name="schoolInfo">
        <SchoolTag v-if="show === 'schoolInfo'" />
      </el-tab-pane>
      <el-tab-pane label="社保" name="socialInfo">
        <SocialTag v-if="show === 'socialInfo'" />
      </el-tab-pane> -->
    </el-tabs>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
const SHOWPAGE = 'fiskInfo'
const SHOWPAGEDEFAULT = 'baseInfo'
export default {
  components: {
    FiskTag: () => import('./components/fisk.vue'),
    BaseTag: () => import('./components/baseinfo.vue'),
    OperateTag: () => import('./components/operator.vue'),
    AddressTag: () => import('./components/address.vue'),
    CallTag: () => import('./components/call.vue'),
    SchoolTag: () => import('./components/school.vue'),
    SocialTag: () => import('./components/social.vue')
  },
  data () {
    return {
      show: 'baseInfo',
      activeTab: 'baseInfo',
      tabList: [
        {
          label: '基本信息',
          name: 'baseInfo',
          show: false,
          component: 'BaseTag'
        },
        {
          label: '风控报告',
          name: 'fiskInfo',
          show: false,
          component: 'FiskTag'
        },
        {
          label: '运营商报告',
          name: 'operateInfo',
          show: false,
          component: 'OperateTag'
        },
        {
          label: '通讯录',
          name: 'addressInfo',
          show: false,
          component: 'AddressTag'
        },
        {
          label: '通话记录',
          name: 'callInfo',
          show: false,
          component: 'CallTag'
        },
        {
          label: '学信网',
          name: 'schoolInfo',
          show: false,
          component: 'SchoolTag'
        },
        {
          label: '社保',
          name: 'socialInfo',
          show: false,
          component: 'SocialTag'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'tabhistory'
    ])
  },
  methods: {
    ...mapMutations({
      setSidebarList: 'SET_SIDEBAR_LIST',
      setTabHistory: 'SET_TABHISTORY'
    }),
    handleClick (tab, event) {
      this.show = tab.name
      this.setSidebarList(tab.name)
      // 设置请求完成
      // this.setTabHistory(tab.name)
      // console.log(this.tabhistory)
    },
    watchScroll (e) {
      console.log(e.target.scrollTop)
    }
  },
  mounted () {
  },
  created () {
    // 设置基本信息菜单
    this.query = this.$route.query
    // 根据appId 设置相关tab显示隐藏
    this.tabList.forEach(ele => {
      if (ele.name === SHOWPAGE) {
        if (this.query.appId === 'yipurse123456789') {
          ele.show = true
          this.show = SHOWPAGE
          this.activeTab = SHOWPAGE
          this.setSidebarList(SHOWPAGE)
        }
      }
      if (this.query.appId === 'qiandada12345678' || this.query.appId === 'bailian123456789') {
        ele.show = true
        this.setSidebarList(SHOWPAGEDEFAULT)
      }
    })

    // this.show = this.sidebar
    // console.log(this.sidebar)
    // listen el-scroll
    // this.$nextTick(() => {
    //   let scrollDom = document.getElementsByClassName('el-scrollbar__wrap')[0]
    //   scrollDom.addEventListener('scroll', this.watchScroll, true)
    // })
  },
  destroyed () {
    // this.$refs.fisk.removeEventListener('scroll', this.watchScroll, true)
  }
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';
#fisk {
  .el-carousel__item img {
    margin: 0 auto;
    display: block;
  }
  .el-carousel__container {
    width: 100%;
    height: 100%;
    position: absolute !important;
  }
  .el-alert__title.is-bold {
    color: #232323
  }
  .boxtip {
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 10px 0;
    font-size: 16px;
    font-weight: bold;
  }
  .el-pagination {
    text-align: right;
    margin: 10px 0;
  }
  .el-card {
    color: inherit;
  }
  .el-tag--danger {
    background-color: #d9534f;
    border-color: #d9534f;
    color: #fff;
  }
  .el-tag--success {
    background-color: #5cb85c;
    border-color: #5cb85c;
    color: #fff;
  }
  .el-tag--warning {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
  .el-tabs--border-card>.el-tabs__header {
    position: fixed;
    top: 60px;
    left: 0;
    right: 200px;
    border-top: 1px solid #e4e7ed;
    // background-color: #000;
    z-index: 1500
  }
  .headclass th {
    background-color: #f7fafa;
  }
  .rowclass {
    font-size: 12px;
  }
  .table-zone {
    position: relative;
  }
  .quote {
    margin: 10px 0 15px 0px;
    padding: 12px 20px 12px 15px;
    // border-left: 5px solid $primary;
    background: $primary;
    color: #fff;
    font-size: 16px;
    line-height: 1;
  }
  .box-card {
    margin-bottom: 10px;
    position: relative;
  }
  div.el-col{
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.8
    // overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
  }
  .cardinfo{
    font-size: 14px;
    dt {
      background: #f7fafa;
      padding: 10px 10px;
      font-weight: bold;
      color: #333;
    }
    dd {
      padding: 10px 10px;
      border-bottom: 1px dotted #d8d8d8;
      &.ddheader{
        padding: 0 10px;
        background: #f7fafa;
      }
    }
    table {
      font-size: 12px;
    }
  }
  .el-card__header {
    padding: 0 10px;
    line-height: 38px;
    font-size: 12px;
    .card-op {
      float:right;
      line-height:38px;
    }
    .card-tit {
      float:left;
      font-weight: bold;
      color: #333;
      font-size: 16px;
    }
    .rptime {
      font-size: 12px;
    }
  }
  .el-col > span {
    // font-weight: bold
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .table > thead > tr > th,
  .table > tbody > tr > th,
  .table > tfoot > tr > th,
  .table > thead > tr > td,
  .table > tbody > tr > td,
  .table > tfoot > tr > td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
  .table > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
    background: #f7fafa;
    text-align: left;
  }
  .table > caption + thead > tr:first-child > th,
  .table > colgroup + thead > tr:first-child > th,
  .table > thead:first-child > tr:first-child > th,
  .table > caption + thead > tr:first-child > td,
  .table > colgroup + thead > tr:first-child > td,
  .table > thead:first-child > tr:first-child > td {
    border-top: 0;
  }
  .table > tbody + tbody {
    border-top: 2px solid #ddd;
  }
  .table .table {
    background-color: #fff;
  }
  .table-bordered {
    border: 1px solid #ddd;
  }
  .table-bordered > thead > tr > th,
  .table-bordered > tbody > tr > th,
  .table-bordered > tfoot > tr > th,
  .table-bordered > thead > tr > td,
  .table-bordered > tbody > tr > td,
  .table-bordered > tfoot > tr > td {
    border: 1px solid #ddd;
  }
  .table-bordered > thead > tr > th,
  .table-bordered > thead > tr > td {
    border-bottom-width: 2px;
  }
  .table-striped > tbody > tr:nth-of-type(odd) {
    background-color: #f9f9f9;
  }
  .table-hover > tbody > tr:hover {
    background-color: #f5f5f5;
  }
  table col[class*="col-"] {
    position: static;
    float: none;
    display: table-column;
  }
  table td[class*="col-"],
  table th[class*="col-"] {
    position: static;
    float: none;
    display: table-cell;
  }
}
#operator {
  .el-collapse {
    border: 0 none;
  }
  .el-collapse-item__header, .el-collapse-item__arrow {
    height: 28px;
    line-height: 28px;
    border-bottom: 0 none;
  }
  .el-collapse-item__content {
    padding-bottom: 10px;
  }
}
</style>
