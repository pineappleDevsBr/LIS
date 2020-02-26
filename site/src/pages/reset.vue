<template>
  <q-page class="o-reset">
    <div class="a-title -white">{{ $t('reset.title') }}</div>
    <q-form
    @submit.prevent="submit"
    class="q-gutter-md column">

      <q-input
      dark
      color="white"
      label-color="white"
      class="primary-error"
      :type="isPwd ? 'password' : 'text'"
      v-model="form.password"
      @blur="$v.form.password.$touch"
      :error="$v.form.password.$error"
      :error-message="$t('reset.errors.required')"
      :label="$t('reset.password')"/>

      <q-input
      dark
      color="white"
      label-color="white"
      class="primary-error"
      :type="isPwd ? 'password' : 'text'"
      v-model="form.confirmPassword"
      @blur="$v.form.confirmPassword.$touch"
      :error="$v.form.confirmPassword.$error"
      :error-message="$t('reset.errors.same')"
      :label="$t('reset.passwordConfirmation')"/>
      <q-btn rounded no-caps outline color="primary" class="bg-white o-reset_btn" size="lg" type="submit" :label="$t('reset.btn')"/>
    </q-form>
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
            message: this.$i18n.t(`errorFilter.user.${response.error.response.status}`),
            icon: 'report_problem'
          })
        }

        this.$q.loading.hide()
      }
    }
  }
}
</script>
