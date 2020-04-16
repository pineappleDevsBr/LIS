<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import store from './store/index'

export default {
  name: 'App',
  async mounted () {
    await store().dispatch('theme/getTheme')
    await store().dispatch('user/getUser')
    await store().dispatch('darkMode/setDarkMode', this.$q.cookies.get('lis_darkmode'))
  }
}
</script>
