<template>
  <q-page class="bg-primary q-pa-md flex items-center">
    <div class="full-width">
      <div class="text-h2 text-white q-mb-lg">Esqueci minha senha</div>
      <div>
        Informe seu e-mail cadastrado na aplicação
        e você receberá um link para alterar sua
        senha.
      </div>
      <q-form
      @submit.prevent="submit"
      class="q-gutter-md column">

        <q-input
        dark
        color="white"
        label-color="white"
        style="color: white;"
        v-model="form.email"
        @blur="$v.form.email.$touch"
        :error="$v.form.email.$error"
        error-message="Campo obrigatório"
        label="E-mail" />
        <img src="statics/forgot/ilustra.png" alt="">
        <q-btn rounded no-caps outline color="primary" class="bg-white" size="lg" type="submit" label="Enviar e-mail"/>
        <router-link :to="{name: 'login'}" class="q-mt-md text-white a-link">
        Voltar a tela de login
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
      isPwd: true,
      form: {
        email: '',
        password: ''
      },
      errorFilter: {
        '404': 'Usuario nao encontrado',
        '401': 'Senha incorreta',
        '500': 'Erro interno'
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
