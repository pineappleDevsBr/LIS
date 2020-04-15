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
      <div class="o-modal_content m-quiz">
        <progressBar :progress="progress"></progressBar>
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
            <div class="quiz">
              <div class="m-quiz_title">
                <div>
                  {{ question.question }}
                </div>
                {{ question.text }}
              </div>
              <div>
                <q-card class="m-card" v-for="item in question.answers" v-bind:key="item.id">
                  <q-radio keep-color v-model="answers[index].answer" :val="item.id" :label="item.answer" class="full-width" color="accent" />
                </q-card>
              </div>
            </div>
          </q-step>
          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="next()" color="primary" :label="step === 10 ? 'Finalizar' : 'Próximo'" />
              <q-btn v-if="step > 1 " flat color="primary" @click="back()" label="Back" class="q-ml-sm"/>
            </q-stepper-navigation>
        </template>
      </q-stepper>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import progressBar from './progress-bar'
import store from '../store/index'

export default {
  name: 'Quiz',
  components: {
    progressBar
  },
  props: {
    quiz: Boolean,
    taskType: Number,
    questions: Array
  },
  data () {
    return {
      step: 1,
      progress: { showValue: false, levelUp: 10, xp: 0 },
      answers: [
        { question_id: null, answer: null },
        { question_id: null, answer: null },
        { question_id: null, answer: null },
        { question_id: null, answer: null },
        { question_id: null, answer: null },
        { question_id: null, answer: null },
        { question_id: null, answer: null },
        { question_id: null, answer: null },
        { question_id: null, answer: null },
        { question_id: null, answer: null }
      ]
    }
  },
  methods: {
    closeQuiz () {
      this.step = 1
      this.$emit('closeQuiz')
    },
    async next () {
      if (this.step < 10) {
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
        const { approved, results } = await store().dispatch('task/sendAnswers', payload)
        this.$emit('closeQuiz', { approved, results })
        this.step = 1
        this.progress.xp = 0
        this.$q.loading.hide()
      }
    },
    back () {
      if (this.step > 1) {
        this.$refs.stepper.previous()
        this.progress.xp -= 1
      }
    },
    setQuestions () {
      for (let i = 0; i < this.questions.length; i += 1) {
        this.answers[i].question_id = this.questions[i].id
      }
    }
  }
}
</script>
