<template>
  <q-dialog
  v-model="quiz"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
        <h2 class="o-modal_title">Quiz</h2>
        <q-btn
        flat
        icon="close"
        @click="closeQuiz"/>
      </div>
      <div class="o-modal_content">
        <qprogress :progress="progress"/>
        <div>
          Qual a melhor tradução para:
        </div>
        <div>
          I am from Brazil!
        </div>

        <div>
          <q-card class="m-card">
            <q-radio keep-color v-model="answer" val="1" label="Eu sou do Brasil!" class="full-width" color="accent" />
          </q-card>

          <q-card class="m-card">
            <q-radio keep-color v-model="answer" val="2" label="Eu vou para o Brasil!" class="full-width" color="accent" />
          </q-card>

          <q-card class="m-card">
            <q-radio keep-color v-model="answer" val="3" label="Meus pais são do Brasil!" class="full-width" color="accent" />
          </q-card>

          <q-card class="m-card">
            <q-radio keep-color v-model="answer" val="4" label="Vamos para o Brasil!" class="full-width" color="accent" />
          </q-card>
        </div>
        <q-btn no-caps rounded class="m-reading_btn" label="Próximo" @click="next"/>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import qprogress from './progress-bar'
export default {
  name: 'Quiz',
  components: {
    qprogress
  },
  props: {
    quiz: Boolean
  },
  data () {
    return {
      progress: { showValue: true, levelUp: 10, xp: 0 },
      answer: null
    }
  },
  methods: {
    closeQuiz () {
      this.$emit('closeQuiz')
    },
    next () {
      console.log('Próximo')
    }
  }
}
</script>
