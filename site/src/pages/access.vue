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
        <step1 @next="next"></step1>
      </q-step>

      <q-step :name="2" title="Personal data" :done="step > 2">
        <step2 @next="next"></step2>
      </q-step>

      <q-step :name="3" title="Themes">
        <step3 @finish="finish"></step3>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script>
import step1 from '../components/access/step-1'
import step2 from '../components/access/step-2'
import step3 from '../components/access/step-3'
import store from '../store/index'

export default {
  name: 'Access',
  components: {
    step1,
    step2,
    step3
  },
  data () {
    return {
      step: 1,
      personalData: null
    }
  },
  methods: {
    next (evt) {
      if (evt) {
        this.personalData = evt
      }
      this.$refs.stepper.next()
    },

    async finish (evt) {
      const payload = this.personalData
      payload.themes = evt

      this.$q.loading.show()
      const response = await store().dispatch('user/createUser', payload)
      if (response.status) {
        this.$q.notify({
          color: 'positive',
          message: this.$i18n.t('access.personalData.registeredSuccessfully'),
          icon: 'report_problem'
        })
        this.$router.push({ name: 'login' })
      } else {
        this.$q.notify({
          color: 'negative',
          message: this.$i18n.t(`errorFilter.user.${response.error.response.status}`),
          icon: 'report_problem'
        })
      }
      this.$q.loading.hide()
    }
  }
}
</script>
