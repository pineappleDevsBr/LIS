<template>
  <div class="o-access_step2">
    <div class="a-title -white -sub">
      Dados pessoais
    </div>

    <q-input
    dark
    color="white"
    label-color="white"
    style="color: white;"
    v-model="form.name"
    @blur="$v.form.name.$touch"
    :error="$v.form.name.$error"
    error-message="Campo obrigatório"
    label="Nome completo" />

    <q-input
    dark
    color="white"
    label-color="white"
    style="color: white;"
    v-model="form.nickname"
    @blur="$v.form.nickname.$touch"
    :error="$v.form.nickname.$error"
    error-message="Campo obrigatório"
    label="Nickname" />

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
    v-model="form.password"
    @blur="$v.form.password.$touch"
    :error="$v.form.password.$error"
    error-message="Campo obrigatório"
    type="password"
    label="Senha" />

    <q-input
    dark
    color="white"
    label-color="white"
    style="color: white;"
    v-model="form.confirm_password"
    @blur="$v.form.confirm_password.$touch"
    :error="$v.form.confirm_password.$error"
    error-message="Campo obrigatório"
    type="password"
    label="Confirmação de senha" />

    <q-input
    dark color="white" label-color="white" style="color: white;"
    v-model="form.date_of_birth" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="form.date_of_birth" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <img class="o-access_ilustra" src="statics/access/ilustra_step2.svg" alt="">
    <q-btn
    rounded
    outline
    color="primary"
    class="bg-white o-access_btn"
    size="lg"
    label="Próximo"
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
