<template>
  <q-page class="bg-primary q-pa-md flex items-center">
    <div class="full-width">
      <div class="text-h2 text-white q-mb-lg">LIS</div>
      <q-form
      @submit.prevent="submit"
      class="q-gutter-md column">

        <q-input
        outlined
        bg-color="white"
        color="primary"
        v-model="form.email"
        @blur="$v.form.email.$touch"
        :error="$v.form.email.$error"
        error-message="Campo obrigatório"
        label="E-mail" />

        <q-input
        outlined
        type="password"
        bg-color="white"
        color="primary"
        v-model="form.password"
        @blur="$v.form.password.$touch"
        :error="$v.form.password.$error"
        error-message="Campo obrigatório"
        label="Senha"/>

        <q-btn push type="submit" label="Login"/>

        <router-link :to="{name: 'forgot-password'}" class="q-mt-md text-white a-link">
        Esqueci minha senha
      </router-link>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import store from '../store/index'

export default {
  name: 'login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    async submit () {
      const payload = {
        email: this.form.email,
        password: this.form.password
      }

      this.$v.form.$touch()

      if (!this.$v.form.$error) {
        this.$q.loading.show()
        const response = await store().dispatch('auth/login', payload)

        if (response.status) {
          this.$router.push({ name: 'home' })
        } else {
          this.$q.notify({
            color: 'negative',
            message: this.$t('auth.errorRequest'),
            icon: 'report_problem'
          })
        }

        this.$q.loading.hide()
      }
    }
  }
}
</script>
