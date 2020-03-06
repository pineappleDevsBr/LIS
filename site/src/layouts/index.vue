<template>
  <div class="bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
    <q-layout view="lHh Lpr lFf"  class="v-hld_mobile bg-white" :class="{ 'q-dark': $q.dark.isActive }">
        <qheader></qheader>
          <q-page-container>
            <div class="v-container">
              <router-view />
            </div>
          </q-page-container>
    </q-layout>
  </div>
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
