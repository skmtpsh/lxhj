<template>
  <div class="page repay">
    <div id="history">
        <div id="content" v-if="isShow">
          <ul class="list">
            <li v-for="(item, index) in list" v-bind:key="index" :class="{thiscur: item.state === '已还清'}">
              <div class="liwrap">
                <div class="lileft" :class="{licur: item.state === '已还清'}">
                  <div class="date">
                    <span class="year">{{item.repayTerms}}</span>
                    <span class="md">{{item.playDate}}</span>
                  </div>
                </div>
                <!-- <div class="point">
                  <b></b>
                </div> -->
                <div class="liright">
                  <div class="histt">
                    <a href="#" class="Empha">￥{{item.repayTotal}}</a>
                  </div>
                  <div class="hisct">
                    {{item.remark}}
                  </div>
                  <p class="result" :class="{Empha: item.state === '已逾期'}">{{item.state}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <section v-if="!isShow">
          <div class="noinfo"></div>
        </section>
      </div>
    </div>
</template>
<script>
import * as recordApi from '@/api/record'
export default {
  data () {
    return {
      list: [],
      isShow: false
    }
  },
  created () {
    this.qry = this.$route.query
    recordApi.getRepayList({token: this.qry.token, userId: this.qry.userid})
      .then((response) => {
        if (response.data.code === '0') {
          this.list = response.data.data.repayList
          if (response.data.data.repayList.length > 0) {
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
  padding-top: 10px;
}
.noinfo {
  position: fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width: 100px;
  height: 130px;
  background: url(../../assets/records.png) no-repeat center center;
}
#history {
  width: 100%;
  position: relative;
}

.title {
  height: 95px;
  line-height: 95px;
  text-indent: 280px;
}

.title h2 {
  color: #7c7c7c;
  font-size: 18px;
  font-weight: 500;
}

#circle {
  width: 83px;
  height: 83px;
  position: absolute;
  top: 0;
  left: 390px;
  border: 6px solid rgba(0, 0, 0, 0.15);
  border-radius: 95px;
  text-indent: 0;
  text-align: center;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

#circle .cmsk {
  height: 83px;
  position: absolute;
  width: 83px;
  top: 0;
  left: 0;
}

#circle:hover {
  transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  border-color: rgba(0, 0, 0, 0);
}

.clock {
  display: block;
}

#circle:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background-color: #6bc30d;
}

#circle:hover .clock {
  display: block;
}

#circle:hover .circlecontent {
  display: none;
}

#circle span {
  font-size: 18px;
  color: #b0b0b0;
}

#circle .clock {
  width: 83px;
  height: 83px;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  -webkit-transition: all 0.5s linear;
  -moz-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  transition: all 0.5s linear;
  border-radius: 0;
}

#circle:hover .clock {
  border-radius: 83px;
}

.timeyear {
  color: #b0b0b0;
  font-size: 18px;
  line-height: 20px;
}

.timeblock {
  height: 28px;
  margin-top: 22px;
  margin-left: 5px;
}

.timeblock span {
  display: block;
  height: 24px;
  width: 18px;
  float: left;
}

.timeblock .numf {
  background-position: 0px -48px;
}

.timeblock .nums {
  background-position: 0px 0px;
}

.timeblock .numt {
  background-position: 0px -24px;
}

.timeblock .numfo {
  background-position: 0px -72px;
}

#content {
  height: 100% !important;
  width: 100%;
  overflow: visible;
  /* padding-top: 34px; */
  background-color: #fff;
}

.list {
  overflow: visible;
  position: relative;
  height: 100% !important;
  width: 100%;
  padding: 20px 0;
}

.list li {
  height: 108px;
  vertical-align: bottom;
  overflow: hidden;
  position: relative;
}

.liwrap {
  height: 55px;
  margin-top: 28px;
}

.lileft {
  position: absolute;
  top: 0;
  left: 0px;
  height: 109px;
  width: 32%;
  line-height: 48px;
  text-align: right;
  border-right: 1px solid #ccc;
  padding-right: 14px;
}

.liright {
  position: absolute;
  top: 0;
  right: 0px;
  height: 55px;
  width: 61%;
}

.histt {
  height: 28px;
  line-height: 25px;
}

.hisct {
  font-size: 14px;
  color: #6e6e6e;
}

.md {
  font-size: 14px;
  color: #aeaeae;
}

.year {
  font-size: 16px;
  color: #333333;
  display: block;
  height: 20px;
  line-height: 26px;
  font-weight: bold;
}

.lileft::after {
  content: "";
  /* width: 55px;
  height: 55px;
  position: absolute;
  top: 0;
  left: 28%;
  overflow: hidden; */
  height: 14px;
  width: 14px;
  background: #cccccc;
  display: block;
  margin: 0px 0 0 7px;
  border-radius: 14px;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  -o-transition: all 0.1s linear;
  transition: all 0.1s linear;
  position: absolute;
  top: 0;
  right: -7px;
}

/* .point b {

} */

.thiscur .lileft::after {
  border: 6px solid rgba(255, 91, 6, 1);
  border-radius: 52px;
  background: #fff;
  border: 4px solid rgba(255, 91, 6, 1);
  /* border-radius: 52px; */
  background: #fff;
  height: 18px;
  width: 18px;
  border-radius: 18px;
  right: -9px;
}

.thiscur .histt a {
  color: #ff5b06;
  text-decoration: none;
}

.histt a {
  font-size: 17px;
  color: #747474;
  text-decoration: none;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

#arrow {
  position: fixed;
  top: 50%;
  right: 30px;
}

#arrow ul li {
  display: block;
  height: 20px;
  width: 20px;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

#arrow ul li:active {
  background-color: #000;
}

#arrow ul .arrow_active {
  background-color: #000;
  -webkit-transition: all 0.1s ease-in;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
}

#arrow ul .arrowup {
  background-position: 0px -26px;
  margin-bottom: 10px;
}

#arrow ul .arrowdown {
  background-position: 0px 0px;
}

.Empha {
  color: #ff5b06!important;
  font-weight: bold;
}
.result {
  float: right;
  top: -30px;
  position: relative;
  right: 16px;
  font-size: 14px;
}
.top {
  height: 20px;
  background-color: #f6f6f6;
}
.licur {
  border-right: 1px solid #ff5b06;
}
</style>
