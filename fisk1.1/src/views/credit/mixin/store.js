import { mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'tabhistory'
    ])
  },
  methods: {
    ...mapMutations({
      setTabHistory: 'SET_TABHISTORY'
    })
  }
}
