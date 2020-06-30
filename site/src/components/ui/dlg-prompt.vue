<template>
  <q-dialog v-model="prompt.isOpen" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">{{prompt.title}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="prompt.value" autofocus @keyup.enter="isClose(prompt.value)" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat :label="$t('dlg.cancel')" v-close-popup @click="isClose()"/>
        <q-btn flat :label="$t('dlg.change')" v-close-popup @click="isClose(prompt.value)"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'qprompt',
  props: {
    prompt: Object
  },
  methods: {
    isClose (value) {
      if (value) {
        this.$emit('isClose', { type: this.prompt.type, newValue: this.prompt.value })
      }
    }
  }
}
</script>
