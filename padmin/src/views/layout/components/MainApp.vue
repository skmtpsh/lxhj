<template>
  <section class="content">
    <bread-nav></bread-nav>
    <main class="pgcontent">
      <router-view />
    </main>
  </section>
</template>
<script>
import BreadNav from '@/views/layout/components/BreadNav'
export default {
  name: 'MainApp',
  components: {
    BreadNav
  },
  data () {
    return {}
  }
}
</script>
