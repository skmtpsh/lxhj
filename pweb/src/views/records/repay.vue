<template>
  <div class="page repay">
    <ul class="repaylist" v-if="isShow">
      <li v-for="(item, index) in list" v-bind:key="index">
        <section class="repayinfo">
          <div class="info"><span class="period">{{item.repayTerms}}</span><span class="price">{{item.repayMoney}}</span></div>
          <p class="date">{{item.repayTime}}</p>
        </section>
        <section class="repaytype">
          <span>{{item.type}}</span>
        </section>
      </li>
    </ul>
    <template v-if="!isShow">
      <div class="noinfo"></div>
    </template>
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
    recordApi.getRecordsList({token: this.qry.token, userId: this.qry.userid})
      .then((response) => {
        if (response.data.code === '0') {
          if (response.data.data.length > 0) {
            this.list = []
          }
          if (Object.keys(response.data.data).length > 0) {
            this.list = response.data.data.recordList
            if (response.data.data.recordList.length > 0) {
              this.isShow = true
            }
          }
        } else {
          console.log(response.data.msg)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.blank {
  text-align: center;
  width: 100%;
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
.repay {
  margin-top: 10px;
}
.page:after {
  content: " ";
  display: block;
  height: 50px;
}
.repaylist {
  padding: 10px;
  margin-top: 10px;
  background: #fff;
}
.repaylist li {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.repaylist li {
  border-bottom: 1px solid #eaeaea;
  padding: 10px;
}
.repayinfo {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.repaytype {
  width: 100px;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  -webkit-align-items: center;
  align-items: center;
  text-align: right;
  font-size: 16px;
  color: #999999
}
.repayinfo .info {
  height: 26px;
  line-height: 26px;
}
.repayinfo p {
  margin: 10px 0;
}
.repayinfo .date {
  font-size: 14px;
  color: #999999
}
.repayinfo .price {
  display: inline-block;
  font-size: 20px;
  margin-left: 10px;
  vertical-align: middle;
  color: #333333;
}
.repayinfo .period {
  display: inline-block;
  border: 1px solid #ff5c07;
  padding: 0px 6px;
  font-size: 14px;
  border-radius: 4px;
  color: #ff5c07;
  height: 24px;
  line-height: 24px;
  vertical-align: middle
}
</style>
