<template>
  <div class="o-access_step2">
    <div class="a-title -white -sub">
      {{ $t('access.personalData.title') }}
    </div>

    <q-input
    dark
    color="white"
    label-color="white"
    class="primary-error"
    v-model="form.name"
    @blur="$v.form.name.$touch"
    :error="$v.form.name.$error"
    :error-message="$t('access.personalData.errors.required')"
    :label="$t('access.personalData.name')" />

    <q-input
    dark
    color="white"
    label-color="white"
    class="primary-error"
    v-model="form.nickname"
    @blur="$v.form.nickname.$touch, verifyUser('nicknameCheck',form.nickname)"
    :error="$v.form.nickname.$error"
    :error-message="$t('access.personalData.errors.required')"
    :label="$t('access.personalData.nickname')"/>

    <q-input
    dark
    color="white"
    label-color="white"
    class="primary-error"
    v-model="form.email"
    @blur="$v.form.email.$touch, verifyUser('emailCheck',form.email)"
    :error="$v.form.email.$error"
    :error-message="$t('access.personalData.errors.required')"
    :label="$t('access.personalData.email')" />

    <q-input
    dark
    color="white"
    label-color="white"
    class="primary-error"
    v-model="form.password"
    @blur="$v.form.password.$touch"
    :error="$v.form.password.$error"
    :error-message="$t('access.personalData.errors.required')"
    type="password"
    :label="$t('access.personalData.password')" />

    <q-input
    dark
    color="white"
    label-color="white"
    class="primary-error"
    v-model="form.confirm_password"
    @blur="$v.form.confirm_password.$touch"
    :error="$v.form.confirm_password.$error"
    :error-message="$t('access.personalData.errors.required')"
    type="password"
    :label="$t('access.personalData.passwordConfirmation')" />

    <q-input
    :label="$t('access.personalData.dateOfBirth')"
    dark color="white" label-color="white" class="primary-error"
    v-model="form.dateOfBirth">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="form.dateOfBirth" @input="() => $refs.qDateProxy.hide()"  mask="DD/MM/YYYY"/>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-btn
    no-caps
    rounded
    :disabled="disabled"
    outline
    color="primary"
    class="bg-white o-access_btn"
    size="lg"
    :label="$t('access.personalData.btn')"
    @click="next"/>
  </div>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
import store from '../../store/index'

export default {
  name: 'step2',
  data () {
    return {
      form: {
        name: '',
        nickname: '',
        email: '',
        password: '',
        confirm_password: '',
        dateOfBirth: ''
      },
      errors: {
        nicknameCheck: false,
        emailCheck: false
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
      confirm_password: { required, sameAsPassword: sameAs('password') },
      name: { required },
      nickname: { required },
      dateOfBirth: { required }
    }
  },
  methods: {
    next () {
      const payload = {
        email: this.form.email,
        password: this.form.password,
        name: this.form.name,
        nickname: this.form.nickname,
        dateOfBirth: this.form.dateOfBirth
      }

      this.$v.form.$touch()

      if (!this.$v.form.$error) {
        this.$emit('next', payload)
      }
    },
    async verifyUser (type, user) {
      const userCheck = { payload: {} }
      userCheck.payload = type === 'nicknameCheck' ? { nickname: user } : { email: user }

      const response = await store().dispatch('user/checkUser', userCheck)
      if (response === 204) {
        this.$q.notify({
          color: 'negative',
          message: this.$i18n.t(`errorFilter.${type}.${response}`),
          icon: 'report_problem'
        })

        if (type === 'nicknameCheck') this.errors.nicknameCheck = true
        else this.errors.emailCheck = true
      } else {
        if (type === 'nicknameCheck') this.errors.nicknameCheck = false
        else this.errors.emailCheck = false
      }
    }
  },
  computed: {
    disabled () {
      const verify = this.errors.nicknameCheck || this.errors.emailCheck
      return verify
    }
  }
}
</script>
