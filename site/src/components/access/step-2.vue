<template>
  <div class="o-access_step2">
    <div class="a-title -white -sub">
      {{ $t('access.personal_data.title') }}
    </div>

    <q-input
    dark
    color="white"
    label-color="white"
    class="primary-error"
    v-model="form.name"
    @blur="$v.form.name.$touch"
    :error="$v.form.name.$error"
    :error-message="$t('access.personal_data.errors.required')"
    :label="$t('access.personal_data.name')" />

    <q-input
    dark
    color="white"
    label-color="white"
    class="primary-error"
    v-model="form.nickname"
    @blur="$v.form.nickname.$touch"
    :error="$v.form.nickname.$error"
    :error-message="$t('access.personal_data.errors.required')"
    :label="$t('access.personal_data.nickname')" />

    <q-input
    dark
    color="white"
    label-color="white"
    class="primary-error"
    v-model="form.email"
    @blur="$v.form.email.$touch"
    :error="$v.form.email.$error"
    :error-message="$t('access.personal_data.errors.required')"
    :label="$t('access.personal_data.email')" />

    <q-input
    dark
    color="white"
    label-color="white"
    class="primary-error"
    v-model="form.password"
    @blur="$v.form.password.$touch"
    :error="$v.form.password.$error"
    :error-message="$t('access.personal_data.errors.required')"
    type="password"
    :label="$t('access.personal_data.password')" />

    <q-input
    dark
    color="white"
    label-color="white"
    class="primary-error"
    v-model="form.confirm_password"
    @blur="$v.form.confirm_password.$touch"
    :error="$v.form.confirm_password.$error"
    :error-message="$t('access.personal_data.errors.required')"
    type="password"
    :label="$t('access.personal_data.password_confirmation')" />

    <q-input
    :label="$t('access.personal_data.date_of_birth')"
    dark color="white" label-color="white" class="primary-error"
    v-model="form.date_of_birth" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="form.date_of_birth" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-btn
    no-caps
    rounded
    outline
    color="primary"
    class="bg-white o-access_btn"
    size="lg"
    :label="$t('access.personal_data.btn')"
    @click="next"/>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

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
        date_of_birth: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
      confirm_password: { required },
      name: { required },
      nickname: { required },
      date_of_birth: { required }
    }
  },
  methods: {
    next () {
      this.$emit('next')
    }
  }
}
</script>
