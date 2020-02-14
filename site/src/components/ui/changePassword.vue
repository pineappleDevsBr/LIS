<template>
  <q-dialog v-model="isOpen" persistent>
    <q-card class="m-card">
      <q-stepper
      v-model="step"
      ref="stepper"
      contracted
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Password"
        :done="step > 1"
      >
        <q-card-section>
          <q-input
          color="primary"
          v-model="currentPassword"
          :type="isPwd ? 'password' : 'text'"
          label="Senha atual">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        </q-card-section>
        <q-card-actions align="left">
          <q-btn flat class="a-btn_actions" @click="close" label="Cancelar"/>
          <q-btn flat class="a-btn_actions" @click="next" label="Próximo"/>
        </q-card-actions>
      </q-step>

      <q-step
        :name="2"
        title="New Password"
        :done="step > 2"
      >
        <q-card-section>
          <q-input color="primary" type="password" v-model="newPassword" label="Nova senha" />
          <q-input color="primary" type="password" v-model="confirmPassword" label="Confirmar nova senha" />
        </q-card-section>
        <q-card-actions align="left">
          <q-btn flat class="a-btn_actions" @click="save" label="Alterar senha"/>
        </q-card-actions>
      </q-step>
      </q-stepper>
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  name: 'changePassword',
  props: {
    isOpen: Boolean
  },
  data () {
    return {
      step: 1,
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      isPwd: true
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    next () {
      this.$refs.stepper.next()
    },
    save () {
      this.step = 1
      this.$emit('close')
    }
  }
}
</script>
