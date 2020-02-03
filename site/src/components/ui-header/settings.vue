<template>
  <div>
    <q-btn flat dense round no-ripple @click="openSettings = true">
      <img class="o-header_settings" :src="`statics/profile/cog.svg`" alt="">
    </q-btn>
    <settings :settings="openSettings" @closeSettings="closeSettings"></settings>
  </div>
</template>

<script>
import settings from '../settings'

export default {
  name: 'header-settings',
  components: {
    settings
  },
  data () {
    return {
      openSettings: false
    }
  },
  methods: {
    closeSettings () {
      this.openSettings = false
    }
  }
}
</script>
