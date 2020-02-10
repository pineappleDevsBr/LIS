<template>
  <div class="o-access_step3">
    <div class="a-text o-access_text">
      Escolha de temas
    </div>
    <q-card class="my-card">
      <q-card-section>
         <q-input dense v-model="filter" label="Buscar tema..." />
      </q-card-section>
    </q-card>
    <div class="q-px-sm q-mt-sm text-white">
      Seus temas: {{ themes }}
    </div>
    <img class="o-access_ilustra" src="statics/access/ilustra_step3.svg" alt="">
    <q-btn
    rounded
    outline
    color="primary"
    class="bg-white o-access_btn"
    size="lg"
    label="Próximo"
    @click="finish"/>
  </div>
</template>

<script>
export default {
  name: 'step3',
  data () {
    return {
      filter: '',
      themes: []
    }
  },
  methods: {
    finish () {
      this.$emit('finish')
    }
  }
}
</script>
