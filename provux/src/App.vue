<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
@design-width: 750;
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}

body {
  font-family: -apple-system-font,Helvetica Neue,sans-serif;
}

* {
  margin: 0;
  padding: 0;
  touch-action: pan-y;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a img {
  border: 0
}

a {
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0)
}

::-webkit-input-placeholder {
  font-family: -apple-system-font,Helvetica Neue,sans-serif
}

a {
  -webkit-touch-callout: none
}
body,html {
    height: 100%;
    max-width: 750px; /*no*/
    // width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
}
body.main {
  background-color: #fecb00;
}
body.down {
  background-color: #feecaa;
}
</style>
