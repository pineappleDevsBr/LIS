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
    :error="!validationPassword"
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
    v-model="form.dateOfBirth" mask="##/##/####">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="form.dateOfBirth" @input="() => $refs.qDateProxy.hide()"  mask="DD/MM/YYYY" :locale="myLocale"/>
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
      myLocale: {
        days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
        daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julio_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dec'.split('_')
      },
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
      const newDate = this.formatDate(this.form.dateOfBirth)

      const payload = {
        name: this.form.name,
        nickname: this.form.nickname,
        email: this.form.email,
        password: this.form.password,
        date_of_birth: newDate
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
    },
    formatDate (date) {
      const yyyymmdd = date.split('/')
      return `${yyyymmdd[2]}-${yyyymmdd[1]}-${yyyymmdd[0]}`
    }
  },
  computed: {
    disabled () {
      const verify = this.errors.nicknameCheck || this.errors.emailCheck
      return verify
    },
    validationPassword () {
      const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/
      return reg.test(this.form.password)
    }
  }
}
</script>
