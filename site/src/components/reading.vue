<template>
  <q-dialog
  v-model="reading"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
        <h2 class="o-modal_title">Leitura</h2>
        <div>
          <q-btn
          flat
          icon="close"
          @click="confirm= true"/>
        </div>
        </div>
        <div class="o-modal_content o-reading">
          <div class="m-reading_translated">
            <span class="m-reading_translated-toggle">
              Tradução
              <q-toggle v-model="translated" color="primary"/>
            </span>
          </div>
          <q-card class="m-card">
            <q-card-section v-if="!translated">
              <h2 class="m-reading_title">{{ title }}</h2>
              <q-scroll-area class="m-reading_scroll">
              <div class="m-reading_text">
                {{ text }}
              </div>
              </q-scroll-area>
            </q-card-section>
            <q-card-section v-else>
              <h2 class="m-reading_title">{{ title }}</h2>
              <q-scroll-area class="m-reading_scroll">
              <div class="m-reading_text">
                {{ translation }}
              </div>
              </q-scroll-area>
            </q-card-section>
          </q-card>
          <q-btn no-caps rounded :disabled="!finishReading"  class="m-reading_btn" :label="!finishReading ? `Aguarde ${minutes}segundos para ler outro texto` : 'Ler outro texto'" @click="closeReading"/>
      </div>
    </div>
    <q-dialog v-model="confirm" persistent>
      <q-card class="m-card -limit">
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Deseja mesmo abandonar essa atividade?<br>Suas respostas e recompensas serão perdidas</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat rounded label="Sim" class="a-btn -dark" v-close-popup @click="closeReading"/>
          <q-btn flat rounded label="Não" class="a-btn -dark" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-dialog>
</template>

<script>
import store from '../store/index'

export default {
  name: 'Reading',
  props: {
    reading: Boolean,
    taskType: Number,
    questions: Array
  },
  data () {
    return {
      translated: false,
      finishReading: false,
      confirm: false,
      time: 60,
      counter: 100,
      counterSet: null,
      title: '',
      text: '',
      translation: '',
      numberWords: 0,
      aux: 100
    }
  },
  methods: {
    async closeReading () {
      if (this.finishReading) {
        const payload = {
          task_id: this.questions[0].task_id,
          task_type_id: this.taskType,
          answers: ''
        }
        const { approved, values } = await store().dispatch('task/sendAnswers', payload)
        this.$emit('closeReading', { approved, values })
      } else this.$emit('closeReading')
    },
    startCount () {
      const set = setInterval(() => {
        if (this.time > 0) {
          this.time -= 1
          this.counter -= this.aux
        } else {
          clearInterval(set)
          this.finishReading = true
        }
      }, 1000)
    }

  },
  computed: {
    minutes () {
      return this.time < 60 ? `${this.time} segundos ` : `${Math.trunc(this.time / 60)} minuto(s) `
    }
  },
  watch: {
    questions (value) {
      this.startCount()
      this.title = value[0].question
      this.text = value[0].text
      this.translation = value[0].translation
      this.numberWords = this.text.split(' ')
      // this.time = Math.trunc((this.numberWords.length * 70) / 150)
      this.time = 2
      this.aux = (100 / this.time)
    }
  }
}
</script>
