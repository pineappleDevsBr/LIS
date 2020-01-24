<template>
  <q-page class="bg-primary q-pa-md flex items-center">
    <div class="full-width">
      <div class="text-h2 text-white q-mb-lg">LIS</div>
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md column">

        <q-input outlined bg-color="white" color="primary" v-model="email" label="E-mail" />
        <q-input outlined bg-color="white" color="primary" type="password" v-model="password" label="Senha" />

        <q-btn outline color="white" size="lg" label="Login" />
        <router-link to="#" class="q-mt-md text-white a-link">
        Esqueci minha senha
      </router-link>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style>
</style>
