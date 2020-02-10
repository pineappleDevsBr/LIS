<template>
  <q-page class="o-access">
    <q-stepper
      v-model="step"
      ref="stepper"
      animated
      contracted
      class="bg-primary no-shadow"
    >
      <q-step :name="1" title="Register" :done="step > 1">
        <step1 @next="next" @finish="finish"></step1>
      </q-step>

      <q-step :name="2" title="Personal data" :done="step > 2">
        <step2 @next="next" @finish="finish"></step2>
      </q-step>

      <q-step :name="3" title="Themes">
        <step3 @next="next" @finish="finish"></step3>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script>
import step1 from '../components/access/step-1'
import step2 from '../components/access/step-2'
import step3 from '../components/access/step-3'

export default {
  name: 'Access',
  components: {
    step1,
    step2,
    step3
  },
  data () {
    return {
      step: 1
    }
  },
  methods: {
    next () {
      this.$refs.stepper.next()
    },

    finish () {
      console.log('Concluido!')
    }
  }
}
</script>
