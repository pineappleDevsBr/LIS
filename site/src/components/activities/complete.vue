<template>
  <q-dialog
  v-model="complete"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
        <h2 class="o-modal_title">{{ $t('activities.complete') }}</h2>
        <q-btn
        flat
        icon="close"
        @click="closeActivities.open = true"/>
      </div>
      <div class="o-modal_content m-quiz">
        <progressBar :progress="progress"></progressBar>
        <q-form @submit="next">
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
                <q-card class="m-card">
                  <q-card-section>
                    <div class="m-quiz_title">
                      {{ question.question }} {{ question.text }}
                    </div>
                  </q-card-section>
                </q-card>
                    <q-input
                      autofocus
                      color="primary"
                      class="primary-error"
                      v-model="answers[index].answer"
                      :label="$t('activities.common.enterAnswer')"
                    />
              </div>
            </q-step>
            <template v-slot:navigation>
              <q-stepper-navigation>
                <q-btn type="submit" @click="next" color="primary" :label="step === questions.length ? $t('activities.common.finish') : $t('activities.common.next')" />
                <q-btn v-if="step > 1 " flat color="primary" @click="back()" :label="$t('activities.common.back')" class="q-ml-sm"/>
              </q-stepper-navigation>
            </template>
          </q-stepper>
        </q-form>
      </div>
    </div>
    <closeActivities
      :persistent="closeActivities.presistent"
      :title="closeActivities.title"
      :isOpen="closeActivities.open"
      @close="closeComplete"/>
  </q-dialog>
</template>

<script>
import progressBar from '../ui/progress-bar'
import closeActivities from '../ui/dlg-confirm'
import store from '../../store/index'

export default {
  name: 'Quiz',
  components: {
    progressBar,
    closeActivities
  },
  props: {
    complete: Boolean,
    taskType: Number,
    questions: Array
  },
  data () {
    return {
      step: 1,
      progress: { showValue: false, levelUp: 10, xp: 0 },
      answers: [],
      closeActivities: {
        open: false,
        persistent: true,
        title: this.$t('activities.common.titleModal')
      }
    }
  },
  methods: {
    closeComplete (evt) {
      this.step = 1
      this.progress.xp = 0
      this.answers.forEach(elm => (elm.answer = null))
      this.closeActivities.open = false
      if (evt) this.$emit('closeComplete')
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
          const { approved, results, values } = await store().dispatch('task/sendAnswers', this.cleanAnswers(payload))

          this.answers.forEach(elm => {
            elm.question_id = null
            elm.answer = null
          })
          this.$emit('closeComplete', { approved, results, values })
          this.step = 1
          this.progress.xp = 0
          this.$q.loading.hide()
        }
      } else {
        this.$q.notify({
          color: 'negative',
          message: this.$t('activities.common.answerEmpty'),
          icon: 'create'
        })
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
