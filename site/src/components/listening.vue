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
        @click="closeListening"/>
      </div>
      <div class="o-modal_content">
        <qprogress :progress="progress"/>
        <q-card class="m-card m-listening_card">
          Escolha a tradução que você ouvir:
          <q-btn flat icon="volume_up" class="m-listening_btn" @click="playListening"/>
          <video data-audio class="m-listening_audio" src="statics/activities/listening/listen-1.mp3"></video>
        </q-card>
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
  name: 'Listening',
  components: {
    qprogress
  },
  // props: {
  //   listening: Boolean
  // },
  data () {
    return {
      listening: false,
      progress: { showValue: true, levelUp: 10, xp: 0 },
      answer: null
    }
  },
  methods: {
    playListening () {
      const audio = document.querySelector('[data-audio]')
      audio.play()
    },
    closeListening () {
      this.$emit('closeListening')
    },
    next () {
      console.log('Próximo')
    }
  }
}
</script>
