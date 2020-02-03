<template>
  <div>
    <q-btn flat dense round no-ripple :to="{ name: 'settings' }">
      <img class="o-header_settings" :src="`statics/profile/cog.svg`" alt="">
    </q-btn>
  </div>
</template>

<script>
export default {
  name: 'header-settings'
}
</script>
