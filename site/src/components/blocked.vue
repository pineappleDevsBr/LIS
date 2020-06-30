<template>
  <q-dialog v-model="blocked" persistent>
    <q-card class="m-card -image">
      <q-card-section>
        <div class="text-h6">{{ $t('blocked.title') }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ $t('blocked.text') }}
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ $t('blocked.contact') }}
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ $t('blocked.thanks') }}
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
