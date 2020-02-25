<template>
  <div class="o-access_step1">
    <h1 class="a-title -white">LIS</h1>
    <div class="a-title -white -sub">
      Learn is Simple
    </div>
    <q-btn
    no-caps
    rounded
    outline
    color="primary"
    class="bg-white o-access_btn"
    size="lg"
    :label="$t('access.btn_register')"
    @click="next"/>

    <q-btn
    no-caps
    rounded
    outline
    color="primary"
    class="bg-white o-access_btn"
    size="lg"
    :label="$t('access.btn_login')"
    :to="{name: 'login'}"/>
  </div>
</template>

<script>
export default {
  name: 'step1',
  methods: {
    next () {
      this.$emit('next')
    }
  }
}
</script>
