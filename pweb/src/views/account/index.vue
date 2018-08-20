<template>
 <div class="page account">
    <div class="container">
      <div class="group-warp">
        <div class="bgwrap">
          <div class="card">
            <p class="f16">待还总金额（元）</p>
            <p class="f20">5000.00</p>
            <p class="f16">本期应还（01/3期）</p>
            <p class="f18">800.00</p>
            <!-- <a href="#" class="btnPay">去还款</a> -->
            <a href="javascript:;" class="btnPay btnPayed">已还清</a>
          </div>
        </div>
      </div>
      <div class="group-warp">
        <div class="bgwrap">
          <section class="profile">
            <a href="recordsAll.html" class="prolist">
              <aside><i class="ico"></i></aside>
              <div class="protxt">
                全部账单
                <span></span>
              </div>
            </a>
            <a href="recordsPay.html" class="prolist">
              <aside><i class="ico"></i></aside>
              <div class="protxt">
                还款记录
                <span></span>
              </div>
            </a>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
.page:after {
  content: " ";
  display: block;
  height: 50px;
}
.account .header {
  background: #fff;
  display: -webkit-box;
  display: box;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  text-align: center;
}
.apptit {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  margin: 0 70px;
  height: 44px;
  font-size: 16px;
  line-height: 44px;
  text-align: center;
  color: #333;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap
}
.bgwrap {
  background: #fff;
  width: 100%;
  padding: 10px;
}
.f16 {
  font-size: 14px;
}
.f18 {
  font-size: 20px;
}
.f20 {
  font-size: 32px;
}
.f24 {
  font-size: 24px;
}
.account .card {
  /* margin: 0 auto; */
  margin: 8px ;
  overflow: hidden;
  min-height: 200px;
  max-width: 760;
  position: relative;
  border-radius: 6px;
  font-size: 14px;
  color: #fff;
  padding: 30px 15px 10px;
  background: -webkit-linear-gradient(to right,#f46220,#f77520, #fc9220);
  background: linear-gradient(to right,#f46220,#f77520,#fc9220);
  -webkit-box-shadow: 0 0px 8px rgba(0,0,0,0.5);
  box-shadow: 0 0px 8px rgba(0,0,0,0.5);
}
.account .card::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/a_circle_bg.png');
  background-size: cover;
  z-index: 1;
}
.card p {
  margin: 10px 0
}
.card p.f20 {
  margin-bottom: 20px
}
.card .btnPay {
  font-size: 18px;
  background: #fff;
  border-radius: 6px;
  padding: 10px 25px;
  color: #ff5b06;
  position: absolute;
  right: 15px;
  bottom: 20px;
  z-index: 2;
}
.card .btnPay.btnPayed {
  background: #ffab84;
  color: #fff;
  cursor: default;
}
.prolist {
  display: -webkit-box;
  display: box;
  display: -webkit-flex;
  display: flex;
  position: relative;
  height: 44px;
  line-height: 44px;
  margin-left: 10px;
  padding-right: 20px;
  font-size: 14px;
  color: #000;
  border-bottom: 1px solid #eaeaea;
}
/*可扩展接口*/
.protxt {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 100%;
}
.prolist:last-child {
  border-bottom: 0
}
.prolist:after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  position: absolute;
  top: 50%;
  margin-top: -6px;
  right: 10px
}
</style>
