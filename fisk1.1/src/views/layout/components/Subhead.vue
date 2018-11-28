<template>
  <div class="headerWrapper">
    <div class="header">
      <div class="logo">
        <img src="../../../assets/logo.png" />
      </div>
      <div class="topheader">
        <ul class="headernav">
          <li>
            <div class="report-time">报告时间：<span> {{nowTime}}</span></div>
          </li>
          <li>
            <!-- <el-radio-group v-model="type" size="mini">
              <el-radio-button label="XY-XB" ></el-radio-button>
              <el-radio-button label="TD"></el-radio-button>
              <el-radio-button label="ZM-GRSU"></el-radio-button>
              <el-radio-button label="ALL"></el-radio-button>
            </el-radio-group> -->
          </li>
          <li style="display:none;">
            <el-dropdown trigger="click">
              <div class="el-dropdown-link">
                <el-badge value="2" class="item">
                  <i class="el-icon-bell"></i>
                </el-badge>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <a class="list-group-item">
                    <div class="media-body">
                      <div>更新了相关风控报告的Bug问题更新了相关风控报告的Bug问题</div>
                      <small class="text-muted">10分钟前</small>
                    </div>
                  </a>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a class="list-group-item">
                    <div class="media-body">
                      <div>更新了相关风控报告的Bug问题</div>
                      <small class="text-muted">10分钟前</small>
                    </div>
                  </a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'Subhead',
  data () {
    return {
      type: 'XY-XB',
      nowTime: ''
    }
  },
  created () {
    this.nowTime = moment().format('YYYY-MM-DD HH:mm:ss')
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.media-body {
  line-height: 24px;
  display: block;
  overflow: hidden;
  zoom: 1;
  width: 250px;
  word-break: break-all;
}
.text-muted {
    color: #939aa0 !important;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 0;
}
.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.report-time {
  font-size: $nomal;
  color: $texttwo;
  line-height: 28px;
}
.cardheader {
  background-color: #e8eff0;
  color: $texttwo;
}
.cardbody {
  padding: 10px;
}
.el-dropdown-link {
  cursor: pointer;
  margin: 5px;
}
</style>
