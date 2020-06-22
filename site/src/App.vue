<template>
  <div id="q-app">
    <router-view />
    <blocked :blocked="blocked" @close="closeBlocked"/>
  </div>
</template>

<script>
import blocked from './components/blocked'
import store from './store/index'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { blocked },
  data () {
    return {
      blocked: false
    }
  },
  methods: {
    closeBlocked () {
      this.blocked = false
    }
  },
  computed: {
    ...mapGetters('user', ['getUser'])
  },
  async mounted () {
    const response = await store().dispatch('user/getUser')
    if (response.message === 'Request failed with status code 403') {
      this.blocked = true
    } else {
      await store().dispatch('theme/getTheme')
      await store().dispatch('darkMode/setDarkMode', this.$q.cookies.get('lis_darkmode'))
      if (this.$q.cookies.get('lis_confirmUseItems') === null) {
        this.$q.cookies.set('lis_confirmUseItems', false)
      }
      if (this.$q.cookies.get('lis_tutorial') === null) this.$q.cookies.set('lis_tutorial', this.getUser.xp < 500)
    }
  }
}
</script>
