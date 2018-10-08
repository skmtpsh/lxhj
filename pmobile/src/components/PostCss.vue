<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 class="test">Essential Links</h2>
    <div class="box ignore">
    </div>
    <div class="aspectratio">
      <div class="aspectratio-content">1</div>
    </div>
    <div class="example">
      22
    </div>
    <br />    <br />
    <div id="example"></div>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.test {
  border: .5px solid black;
  border-bottom-width: 4px;
  font-size: 14px;
  line-height: 20px;
  position: relative;
}
.box.ignore { margin: 10px; background-color: red; }
.box { width: 180px; height: 300px; }
.hairlines { border-bottom: 0.5px solid red; }
[w-188-246] { width: 188px; background-color: red; }
[w-188-246] { aspect-ratio: '188:246';}
[aspectratio] { position: relative; }
[aspectratio]::before { content: ''; display: block; width: 1px; margin-left: -1px; height: 0; }
[aspectratio-content] { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; }
@svg 1px-border { height: 2px; @rect { fill: var(--color, black); width: 100%; height: 50%; } }
.example { border: 1px solid transparent; border-image: svg(1px-border param(--color #00b1ff)) 2 2 stretch; }
@svg square { @rect { fill: var(--color, black); width: 100%; height: 100%; } }
#example { background: white svg(square param(--color #ff0000)); }
</style>
