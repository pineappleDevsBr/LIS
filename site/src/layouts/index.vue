<template>
  <q-layout view="lHh Lpr lFf">
    <qheader></qheader>
    <q-page-container>
      <div class="v-container">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import qheader from '../components/header'

export default {
  name: 'MyLayout',
  components: { qheader }
}
</script>

<style>
</style>
