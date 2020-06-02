<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import store from './store/index'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters('user', ['getUser'])
  },
  async mounted () {
    await store().dispatch('user/getUser')
    await store().dispatch('theme/getTheme')
    await store().dispatch('darkMode/setDarkMode', this.$q.cookies.get('lis_darkmode'))
    console.log(this.$q.cookies.get('lis_confirmUseItems'))
    await store().dispatch('settings/confirmUseItems', true)
    if (this.$q.cookies.get('lis_tutorial') === null) this.$q.cookies.set('lis_tutorial', this.getUser.xp < 500)
  }
}
</script>
