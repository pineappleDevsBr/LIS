<template>
  <q-dialog
  v-model="listening"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
        <h2 class="o-modal_title">Leitura</h2>
        <q-btn
        flat
        icon="close"
        @click="confirm = true"/>
      </div>
      <div class="o-modal_content m-listening">
        <qprogress :progress="progress"/>
          <q-stepper
            v-model="step"
            ref="stepper"
            contracted
            dense
            flat
            color="primary"
            animated
          >
            <q-step :name="index + 1" :title="`Question ${question.id}`" icon="edit" :done="step > index" v-for="(question, index) in questions" v-bind:key="question.id">
              <q-card class="m-card m-listening_card">
                {{ question.question }}
                <q-btn flat icon="volume_up" class="m-listening_btn" @click="playListening"/>
                <video data-audio class="m-listening_audio" :src="question.filepath"></video>
              </q-card>
              <div>
                  <q-input v-model="answers[index].answer" label="Digite aqui sua resposta..."/>
              </div>
            </q-step>
            <template v-slot:navigation>
              <q-stepper-navigation>
                <q-btn @click="next()" color="primary" :label="step === questions.length ? 'Finalizar' : 'Próximo'" />
                <q-btn v-if="step > 1 " flat color="primary" @click="back()" label="Back" class="q-ml-sm"/>
              </q-stepper-navigation>
          </template>
        </q-stepper>
      </div>
    </div>
    <q-dialog v-model="confirm" persistent>
      <q-card class="m-card -limit">
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Deseja mesmo abandonar essa atividade?<br>Suas respostas e recompensas serão perdidas</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat rounded label="Sim" class="a-btn -dark" v-close-popup @click="closeListening"/>
          <q-btn flat rounded label="Não" class="a-btn -dark" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-dialog>
</template>

<script>
import qprogress from './progress-bar'
import store from '../store/index'

export default {
  name: 'Listening',
  components: {
    qprogress
  },
  props: {
    listening: Boolean,
    taskType: Number,
    questions: Array
  },
  data () {
    return {
      step: 1,
      confirm: false,
      progress: { showValue: false, levelUp: 10, xp: 0 },
      answers: []
    }
  },
  methods: {
    playListening () {
      const audio = document.querySelector('[data-audio]')
      audio.play()
    },
    closeListening () {
      this.step = 1
      this.progress.xp = 0
      this.confirm = false
      this.answers.forEach(elm => (elm.answer = null))
      this.$emit('closeListening')
    },
    async next () {
      if (this.answers[this.step - 1].answer) {
        if (this.step < this.questions.length) {
          this.$refs.stepper.next()
          this.progress.xp += 1
        } else {
          this.$q.loading.show()
          this.setQuestions()

          const payload = {
            task_id: this.questions[0].task_id,
            task_type_id: this.taskType,
            answers: this.answers
          }
          const { approved, results } = await store().dispatch('task/sendAnswers', this.cleanAnswers(payload))

          this.answers.forEach(elm => {
            elm.question_id = null
            elm.answer = null
          })
          this.$emit('closeListening', { approved, results })
          this.step = 1
          this.progress.xp = 0
          this.$q.loading.hide()
        }
      } else {
        this.$q.notify({
          color: 'negative',
          message: 'Selecione uma resposta!',
          icon: 'check_circle_outline'
        })
      }
    },
    back () {
      if (this.step > 1) {
        this.$refs.stepper.previous()
        this.progress.xp -= 1
      }
    },
    cleanAnswers (payload) {
      const newPayload = []
      payload.answers.forEach(elm => {
        if (elm.answer !== null) newPayload.push(elm)
      })
      payload.answers = newPayload
      return payload
    },
    setQuestions () {
      for (let i = 0; i < this.questions.length; i += 1) {
        this.answers[i].question_id = this.questions[i].id
      }
    }
  },
  watch: {
    questions (value) {
      const amount = []
      for (let i = 0; i < value.length; i += 1) {
        amount.push({ question_id: null, answer: null })
      }
      this.answers = amount
      this.progress.levelUp = value.length
    }
  }
}
</script>
