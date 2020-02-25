<template>
  <q-page class="o-forgot">
    <div class="a-title -white o-forgot_title">Esqueci minha senha</div>
    <div class="a-text">
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
      <q-btn rounded no-caps outline color="primary" class="bg-white o-forgot_btn" size="lg" type="submit" label="Enviar e-mail"/>
      <router-link :to="{name: 'login'}" class="q-mt-md text-white a-link">
      Voltar a tela de login
    </router-link>
    </q-form>
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
        email: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email }
    }
  },
  methods: {
    async submit () {
      const payload = {
        email: this.form.email
      }

      this.$v.form.$touch()

      if (!this.$v.form.$error) {
        this.$q.loading.show()
        const response = await store().dispatch('auth/forgot', payload)

        if (response.status) {
          this.$q.notify({
            color: 'positive',
            message: 'E-mail enviado com sucesso!',
            icon: 'email'
          })
          this.$router.push({ name: 'welcome' })
        } else {
          this.$q.notify({
            color: 'negative',
            message: this.$i18n.t(`errorFilter.${response.error.response.status}`),
            icon: 'report_problem'
          })
        }

        this.$q.loading.hide()
      }
    }
  }
}
</script>
