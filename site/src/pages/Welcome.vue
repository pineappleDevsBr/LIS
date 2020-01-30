<template>
  <q-page class="bg-primary q-pa-md flex column o-welcome">
    <h1 class="o-welcome_title">LIS</h1>
    <div class="a-txt o-welcome_text">
      Learn is Simple
    </div>
    <img class="o-welcome_ilustra" src="~assets/welcome/ilustra.png" alt="">
    <q-btn rounded outline color="primary" class="bg-white" size="lg" label="Vamos começar"  to="/login" />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
