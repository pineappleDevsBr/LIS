<template>
  <q-dialog
  v-model="reading"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
        <h2 class="o-modal_title">{{ $t('activities.reading') }}</h2>
        <div>
          <q-btn
          flat
          icon="close"
          @click="closeActivities.open = true"/>
        </div>
        </div>
        <div class="o-modal_content o-reading">
          <div class="m-reading_translated">
            <span class="m-reading_translated-toggle">
              {{ $t('activities.common.translate') }}
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
          <q-btn no-caps rounded :disabled="!finishReading"  class="m-reading_btn" :label="minutes" @click="closeReading"/>
      </div>
    </div>
    <closeActivities
      :persistent="closeActivities.presistent"
      :title="closeActivities.title"
      :isOpen="closeActivities.open"
      @close="close"
    />
  </q-dialog>
</template>

<script>
import closeActivities from '../ui/dlg-confirm'
import store from '../../store/index'

export default {
  name: 'Reading',
  components: {
    closeActivities
  },
  props: {
    reading: Boolean,
    taskType: Number,
    questions: Array
  },
  data () {
    return {
      closeActivities: {
        open: false,
        persistent: true,
        title: this.$t('activities.common.titleModal')
      },
      set: null,
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
      }
      this.finishReading = false
    },
    close (evt) {
      if (evt) {
        clearInterval(this.set)
        this.$emit('closeReading')
      }
      this.closeActivities.open = false
    },
    startCount () {
      this.set = setInterval(() => {
        if (this.time > 0) {
          this.time -= 1
          this.counter -= this.aux
        } else {
          clearInterval(this.set)
          this.finishReading = true
        }
      }, 1000)
    }

  },
  computed: {
    minutes () {
      const writtenTime = this.time < 60 ? `${this.time} ${this.$t('activities.common.seconds')} ` : `${Math.trunc(this.time / 60)} ${this.$t('activities.common.minutes')} `
      const response = !this.finishReading ? `${this.$t('activities.common.wait')} ${writtenTime} ${this.$t('activities.common.wait2')}` : this.$t('activities.common.readAnother')
      return response
    }
  },
  watch: {
    questions (value) {
      this.startCount()
      this.title = value[0].question
      this.text = value[0].text
      this.translation = value[0].translation
      if (this.text) this.numberWords = this.text.split(' ')
      this.time = Math.trunc((this.numberWords.length * 70) / 2000)
      this.aux = (100 / this.time)
    }
  }
}
</script>
