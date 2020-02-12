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
    await store().dispatch('user/getUser')
  }
}
</script>
