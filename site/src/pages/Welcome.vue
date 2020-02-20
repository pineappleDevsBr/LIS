<template>
  <q-page class="bg-primary q-pa-md flex column o-welcome">
    <h1 class="a-title -white">LIS</h1>
    <div class="a-title -white -sub">
      Learn is Simple
    </div>
    <img class="o-welcome_ilustra" src="~assets/welcome/ilustra.svg" alt="">
    <q-btn rounded outline color="primary" class="bg-white" size="lg" label="Vamos começar"  :to="{name: 'access'}" />
  </q-page>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>
