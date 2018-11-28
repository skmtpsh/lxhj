<template>
<ul>
  <li class="checklist" v-for="(item, index) in datalist" :key="index" :class="{grey: item.has}">
    <flexbox > <!--@click.native="item.check = !item.check"-->
      <check-icon class="check" :value.sync="item.check" v-if="!item.has && showicon"></check-icon>
      <flexbox-item><div class="pd font48" :class="{yq: item.yuqi}">{{item.periods}}</div><p class="dt font42">{{item.date}}</p></flexbox-item>
      <flexbox-item class="text-right"><div><span class="font72">{{item.money}}</span>元</div><p class="in font36">{{item.info}}</p><p :class="{yq: item.yuqi}" class="font36">{{item.yuqi}}</p></flexbox-item>
    </flexbox>
  </li>
</ul>
</template>
<script>
import { CheckIcon } from 'vux'
export default {
  props: {
    datalist: {
      type: Array,
      default: []
    },
    showicon: { // 是否显示单选框
      type: Boolean,
      default: false
    }
  },
  components: {
    CheckIcon
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
  .check {
    margin-right: 30px;
  }
  .checklist {
    padding: 60px 30px;
    background-color: #fff;
    margin-bottom: 30px;
    &.grey {
      background-color: #efefef
    }
    .pd {
      margin-bottom: 30px;
    }
    .yq {
      color: #f0250f
    }
    .dt, .in  {
      color: #979eac;
      margin-bottom: 6px;
    }
  }
</style>
