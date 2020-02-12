<template>
  <q-dialog v-model="changePassword">
    <q-card>
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
          <q-input v-model="password" label="Senha atual" />
          <q-btn @click="$refs.stepper.next()" label="Próximo"/>
        </q-card-section>
      </q-step>

      <q-step
        :name="2"
        title="New Password"
        :done="step > 2"
      >
        <q-card-section>
          <q-input v-model="password" label="Senha atual" />
          <q-btn @click="$refs.stepper.next()" label="Alterar senha"/>
        </q-card-section>
      </q-step>
      </q-stepper>
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  name: 'changePassword',
  data () {
    return {
      changePassword: false,
      password: '',
      step: 1
    }
  }
}
</script>
