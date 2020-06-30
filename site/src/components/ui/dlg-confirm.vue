<template>
  <q-dialog v-model="isOpen" :persistent="persistent">
    <q-card class="m-card -limit">
      <q-card-section class="row items-center">
        <span class="q-ml-sm" v-html="title"></span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat rounded :label="$t('dlg.yes')" class="a-btn -dark" @click="close(true)"/>
        <q-btn flat rounded :label="$t('dlg.no')" class="a-btn -dark" @click="close(false)"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'dlg-confirm',
  props: {
    isOpen: Boolean,
    persistent: Boolean,
    title: String
  },
  methods: {
    close (response) {
      this.$emit('close', response)
    }
  }
}
</script>
