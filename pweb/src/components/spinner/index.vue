<template>
  <div class="custom-spinner-zone" v-show="visible" :class="{'fixed': fixed}">
    <div class="content">
      <div class="bgspinner">
        <spring-spinner
          :animation-duration="1000"
          :size="50"
          :color="'#fff'"
        />
      </div>
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>

<script>
import { SpringSpinner } from 'epic-spinners' // 选择了epic-spinners里面的一种loading效果，还有很多种可以按需切换
export default {
  components: {
    SpringSpinner
  },
  props: {
    visible: {
      required: true,
      type: Boolean
    },
    text: String,
    fixed: Boolean
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .bgspinner {
    height: 70px;
    width: 70px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px;
    /* display: none; */
  }
  .spring-spinner .spring-spinner-rotator {
    border: 4.57143px solid transparent;
  }
  .custom-spinner-zone {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0);
    z-index: 5;
  }
  .custom-spinner-zone .content .text {
    margin-top: 16px;
    width: 100%;
    text-align: center;
    color: #ff5b06;
  }

  .custom-spinner-zone.fixed {
    position: fixed!important;
  }
</style>
