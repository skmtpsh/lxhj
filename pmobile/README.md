# vm-layout

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
vscode 安装px to rem插件  750px的设计图 配置："px-to-rem.px-per-rem": 75

vm配置
参考 https://www.w3cplus.com/mobile/vw-layout-in-vue.html
#
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
	<!--rem方式需要注释-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=no" />
    <title>vm-layout</title>
    <script src="static/buggyfill.min.js"></script>
	<!--rem方式解开-->
    <!-- <script>
      !function(e,t){function i(){var t=n.getBoundingClientRect().width/10;n.style.fontSize=t+"px",p.rem=e.rem=t}var a,r=e.document,n=r.documentElement,o=r.querySelector('meta[name="viewport"]'),l=r.querySelector('meta[name="flexible"]'),m=r.querySelector('meta[name="flexible-in-x5"]'),s=!0,c=0,d=0,p=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var u=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(d=parseFloat(u[1]),c=parseInt(1/d))}else if(l){var f=l.getAttribute("content");if(f){var v=f.match(/initial\-dpr=([\d\.]+)/),h=f.match(/maximum\-dpr=([\d\.]+)/);v&&(c=parseFloat(v[1]),d=parseFloat((1/c).toFixed(2))),h&&(c=parseFloat(h[1]),d=parseFloat((1/c).toFixed(2)))}}if(m&&(s="false"!==m.getAttribute("content")),!c&&!d){var x=(e.navigator.appVersion.match(/android/gi),e.chrome),g=e.navigator.appVersion.match(/iphone/gi),b=e.devicePixelRatio,w=/TBS\/\d+/.test(e.navigator.userAgent),y=!1;try{y="true"===localStorage.getItem("IN_FLEXIBLE_WHITE_LIST")}catch(e){y=!1}d=1/(c=g||x||w&&s&&y?b>=3&&(!c||c>=3)?3:b>=2&&(!c||c>=2)?2:1:1)}if(n.setAttribute("data-dpr",c),!o)if((o=r.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+d+", maximum-scale="+d+", minimum-scale="+d+", user-scalable=no, viewport-fit=cover"),n.firstElementChild)n.firstElementChild.appendChild(o);else{var E=r.createElement("div");E.appendChild(o),r.write(E.innerHTML)}e.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(i,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(a),a=setTimeout(i,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*c+"px":r.addEventListener("DOMContentLoaded",function(e){r.body.style.fontSize=12*c+"px"},!1),i(),p.dpr=e.dpr=c,p.refreshRem=i,p.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},p.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))</script><script>!function(e,t){function i(){var t=n.getBoundingClientRect().width/10;n.style.fontSize=t+"px",p.rem=e.rem=t}var a,r=e.document,n=r.documentElement,o=r.querySelector('meta[name="viewport"]'),l=r.querySelector('meta[name="flexible"]'),m=r.querySelector('meta[name="flexible-in-x5"]'),s=!0,c=0,d=0,p=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var u=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(d=parseFloat(u[1]),c=parseInt(1/d))}else if(l){var f=l.getAttribute("content");if(f){var v=f.match(/initial\-dpr=([\d\.]+)/),h=f.match(/maximum\-dpr=([\d\.]+)/);v&&(c=parseFloat(v[1]),d=parseFloat((1/c).toFixed(2))),h&&(c=parseFloat(h[1]),d=parseFloat((1/c).toFixed(2)))}}if(m&&(s="false"!==m.getAttribute("content")),!c&&!d){var x=(e.navigator.appVersion.match(/android/gi),e.chrome),g=e.navigator.appVersion.match(/iphone/gi),b=e.devicePixelRatio,w=/TBS\/\d+/.test(e.navigator.userAgent),y=!1;try{y="true"===localStorage.getItem("IN_FLEXIBLE_WHITE_LIST")}catch(e){y=!1}d=1/(c=g||x||w&&s&&y?b>=3&&(!c||c>=3)?3:b>=2&&(!c||c>=2)?2:1:1)}if(n.setAttribute("data-dpr",c),!o)if((o=r.createElement("meta")).setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+d+", maximum-scale="+d+", minimum-scale="+d+", user-scalable=no, viewport-fit=cover"),n.firstElementChild)n.firstElementChild.appendChild(o);else{var E=r.createElement("div");E.appendChild(o),r.write(E.innerHTML)}e.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(i,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(a),a=setTimeout(i,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*c+"px":r.addEventListener("DOMContentLoaded",function(e){r.body.style.fontSize=12*c+"px"},!1),i(),p.dpr=e.dpr=c,p.refreshRem=i,p.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},p.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))
    </script> -->
    <script>
	// vm hack / rem方式需要注释
    window.onload = function () {
      window.viewportUnitsBuggyfill.init({ hacks: window.viewportUnitsBuggyfillHacks });
    }
    </script>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```
