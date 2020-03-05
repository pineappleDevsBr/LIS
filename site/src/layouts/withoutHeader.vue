<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'index'
}
</script>
