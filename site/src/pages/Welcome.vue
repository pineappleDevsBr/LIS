<template>
  <q-page class="q-pa-md flex column o-welcome">
    <h1 class="a-title -white">LIS</h1>
    <div class="a-title -white -sub">
      Learn is Simple
    </div>
    <q-btn no-caps rounded outline color="primary" class="bg-white o-welcome_btn" :class="{ 'q-dark': $q.dark.isActive }" size="lg" :label="$t('welcome.btn')"  :to="{name: 'access'}" />
  </q-page>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>
