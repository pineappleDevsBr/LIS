<template>
  <q-dialog v-model="isOpen" persistent>
    <q-card class="m-card">
      <q-card-section>
          <q-input
          color="primary"
          style="padding-bottom: 20px"
          v-model="currentPassword"
          :type="isPwd ? 'password' : 'text'"
          :label="$t('profile.settings.changePassword.current')">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-input
          color="primary"
          :type="isPwdNew ? 'password' : 'text'"
          v-model="newPassword"
          :rules="[val => pattern.exec(val) !== null || $t('access.personalData.errors.notStrong')]"
          lazy-rules
          :label="$t('profile.settings.changePassword.new')"
          :hint="$t('access.personalData.strongPassword')">
          <template v-slot:append>
            <q-icon
              :name="isPwdNew ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwdNew = !isPwdNew"
            />
          </template>
        </q-input>
        <q-input
          color="primary"
          :type="isPwdConfirm ? 'password' : 'text'"
          v-model="confirmPassword"
          @blur="$v.confirmPassword.$touch"
          :error="$v.confirmPassword.$error"
          :error-message="$t('reset.errors.same')"
          :label="$t('profile.settings.changePassword.confirm')">
          <template v-slot:append>
            <q-icon
              :name="isPwdConfirm ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwdConfirm = !isPwdConfirm"
            />
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions align="left">
        <q-btn flat class="a-btn_actions" @click="save" :label="$t('profile.settings.changePassword.change')"/>
        <q-btn flat class="a-btn_actions" @click="close" :label="$t('profile.settings.changePassword.cancel')"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { sameAs } from 'vuelidate/lib/validators'
import store from '../../store'
import { mapGetters } from 'vuex'

export default {
  name: 'changePassword',
  props: {
    isOpen: Boolean
  },
  data () {
    return {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      step: 1,
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      isPwd: true,
      isPwdNew: true,
      isPwdConfirm: true
    }
  },
  validations: {
    confirmPassword: { sameAsPassword: sameAs('newPassword') }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    async save () {
      this.$v.$touch()
      if (!this.$v.$error) {
        const payload = {
          email: this.getUser.email,
          password: this.currentPassword
        }
        const response = await store().dispatch('auth/login', payload)
        if (response.status) {
          this.$emit('close', this.newPassword)
        } else {
          this.$q.notify({
            color: 'negative',
            message: this.$t('profile.settings.changePassword.incorrectPassword'),
            icon: 'report_problem'
          })
        }
      }
    }
  },
  computed: {
    ...mapGetters('user', ['getUser'])
  }
}
</script>
