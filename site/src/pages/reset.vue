<template>
  <q-page class="bg-primary q-pa-md flex items-center">
    <div class="full-width">
      <div class="a-title -white">Alterar minha senha</div>
      <q-form
      @submit.prevent="submit"
      class="q-gutter-md column">

        <q-input
        dark
        color="white"
        label-color="white"
        style="color: white;"
        :type="isPwd ? 'password' : 'text'"
        v-model="form.password"
        @blur="$v.form.password.$touch"
        :error="$v.form.password.$error"
        error-message="Campo obrigatório"
        label="Senha"/>

        <q-input
        dark
        color="white"
        label-color="white"
        style="color: white;"
        :type="isPwd ? 'password' : 'text'"
        v-model="form.confirmPassword"
        @blur="$v.form.confirmPassword.$touch"
        :error="$v.form.confirmPassword.$error"
        error-message="A senha deve ser igual à de cima"
        label="Confirmação da senha"/>
        <img style="margin-top: -30px;" src="statics/reset/ilustra.png" alt="">
        <q-btn rounded no-caps outline color="primary" class="bg-white" size="lg" type="submit" label="Alterar senha"/>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { required, sameAs } from 'vuelidate/lib/validators'
import store from '../store/index'

export default {
  name: 'login',
  data () {
    return {
      isPwd: true,
      token: this.$route.query.token,
      form: {
        confirmPassword: '',
        password: ''
      },
      errorFilter: {
        '404': 'Usuario nao encontrado',
        '500': 'Erro interno'
      }
    }
  },
  validations: {
    form: {
      password: { required },
      confirmPassword: { sameAsPassword: sameAs('password') }
    }
  },
  methods: {
    async submit () {
      const payload = {
        token: this.token,
        password: this.form.password,
        confirmPassword: this.form.confirmPassword
      }

      this.$v.form.$touch()

      if (!this.$v.form.$error) {
        this.$q.loading.show()
        const response = await store().dispatch('auth/reset', payload)

        if (response.status) {
          this.$router.push({ name: 'login' })
        } else {
          this.$q.notify({
            color: 'negative',
            message: this.errorFilter[response.error.response.status],
            icon: 'report_problem'
          })
        }

        this.$q.loading.hide()
      }
    }
  }
}
</script>
