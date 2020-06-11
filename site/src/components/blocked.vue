<template>
  <q-dialog v-model="blocked" persistent>
    <q-card class="m-card -image">
      <q-card-section>
        <div class="text-h6">Más noticias!</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Infelizmente seu acesso foi bloqueado pelo administrador!
      </q-card-section>

      <q-card-section class="q-pt-none">
        Entre em contato com ele pelo e-mail <a href="mailto:admin@lis.com" target="_blank" class="a-link -primary -text-decoration">admin@lis.com</a> para descobrir o que aconteceu e ter seu acesso liberado novamente.
      </q-card-section>

      <q-card-section class="q-pt-none">
        Obrigado pela compreensão!
      </q-card-section>
      <q-card-section align="center">
        <img src="statics/blocked/blocked.png">
      </q-card-section>
      <q-card-actions align="right">
        <div class="m-tutorials_modal-group">
          <q-btn class="m-tutorials_modal-btn" rounded label="Okay" color="primary" @click="close" />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import store from '../store/index'

export default {
  name: 'blocked',
  props: {
    blocked: Boolean
  },
  methods: {
    close () {
      store().dispatch('auth/logout')
      this.$router.push({ name: 'login' })
      this.$emit('close')
    }
  }
}
</script>
