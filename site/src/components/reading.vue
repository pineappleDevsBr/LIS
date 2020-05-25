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
          v-if="finishReading"
          flat
          icon="close"/>
          <q-circular-progress
            v-else
            font-size="14px"
            :value="time"
            size="25px"
            :thickness="0.18"
            color="primary"
            track-color="gray-11"/>
        </div>
        </div>
        <div class="o-modal_content o-reading">
          <div class="m-reading_translated">
            Tradução
            <q-toggle v-model="translated" color="primary"/>
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
        <q-btn no-caps rounded class="m-reading_btn" label="Ler outro texto" @click="closeReading"/>
      </div>
    </div>
  </q-dialog>
</template>

<script>
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
      time: 0,
      title: '',
      text: '',
      translation: ''
    }
  },
  methods: {
    closeReading () {
      this.$emit('closeReading')
    }
  },
  watch: {
    questions (value) {
      this.title = value[0].question
      this.text = value[0].text
      this.translation = value[0].translation
    }
  }
}
</script>
