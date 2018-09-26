<template>
  <div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in lists" v-bind:key="index">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  props: {
    lists: {
      type: Array,
      default: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.swiperObj = new Swiper('#swiper', {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: false, // 修改swiper的父元素时，自动初始化swiper
        onSlideChangeEnd: function (swiper) {
          swiper.update()
        }
      })
    })
  }
}
</script>
<style>
@import 'swiper/dist/css/swiper.min.css';
.swiper-container {
  width: 100%;
  max-width: 760px;
  padding: 10px 0;
  margin: 0px auto;
  height: 400px;
  max-height: 760px;
  background: #fff;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
}
.swiper-slide img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}
.swiper-pagination {
  text-align: right;
}
.swiper-pagination-fraction {
  background: #cccccc;
  color: #fff;
  border-radius: 15px;
  right: 20px;
  left: auto;
  width: auto;
  font-size: 12px;
  padding: 5px 10px;
}
</style>
