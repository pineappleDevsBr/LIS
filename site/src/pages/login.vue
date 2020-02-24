<template>
  <q-page class="o-login">
      <div class="a-title -white">Login</div>
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
        label="Senha">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-btn rounded no-caps outline color="primary" class="bg-white o-login_btn" size="lg" type="submit" label="Login"/>
        <router-link :to="{name: 'forgot-password'}" class="q-mt-md text-white a-link">
        Esqueci minha senha
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
