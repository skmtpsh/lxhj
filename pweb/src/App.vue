<template>
  <div id="app">
    <router-view/>
    <!-- <keep-alive include="orderconfirm">
      <router-view/>
    </keep-alive> -->
    <!-- <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
