<template>
  <div class="o-access_step3">
    <div class="a-title -white -sub">
      Escolha de temas
    </div>
    <q-card class="my-card o-access_selectTheme" style="max-height: 400px; overflow-y: auto;">
      <q-card-section>
         <q-input dense v-model="filter" label="Buscar tema..." />
      </q-card-section>
      <q-card-section>
        Arraste para a direita para selecionar o tema.
      </q-card-section>
      <q-card-section>
        <q-card  class="m-card" v-for="theme in getTheme" v-bind:key="theme.id">
          <q-slide-item @left="onLeft" @right="onRight" right-color="negative">
            <template v-slot:left>
              <q-icon name="done" />
            </template>
            <template v-slot:right>
              <q-icon name="close" />
            </template>
            <q-card-section :class="bgColor">{{theme.name}}</q-card-section>
          </q-slide-item>
        </q-card>
      </q-card-section>
    </q-card>
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
import { mapGetters } from 'vuex'

export default {
  name: 'step3',
  data () {
    return {
      filter: '',
      bgColor: 'bg-white',
      themes: [
        { id: 1, name: 'Marvel Comics' },
        { id: 2, name: 'DC Comics' },
        { id: 3, name: 'Disney' },
        { id: 4, name: 'Disney' },
        { id: 5, name: 'Disney' }
      ]
    }
  },
  methods: {
    finish () {
      this.$emit('finish')
    },
    onLeft ({ reset }) {
      this.bgColor = 'bg-accent'
      this.finalize(reset)
    },

    onRight ({ reset }) {
      this.finalize(reset)
    },

    finalize (reset) {
      this.timer = setTimeout(() => {
        reset()
      }, 1000)
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  },
  computed: {
    ...mapGetters('theme', ['getTheme'])
  }
}
</script>
