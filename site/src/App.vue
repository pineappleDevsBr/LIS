<template>
  <div id="q-app" class="bg-primary">
    <div class="v-hld_mobile">
      <router-view />
    </div>
  </div>
</template>

<script>
import store from './store/index'

export default {
  name: 'App',
  async mounted () {
    await store().dispatch('user/getUser')
    await store().dispatch('theme/getTheme')
  }
}
</script>
