<template>
  <div id="app" style="height:100%;">
    <view-box ref="viewBox">
      <router-view></router-view>
    </view-box>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
