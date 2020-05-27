<template>
  <q-dialog
  v-model="tutorial"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
        <h2 class="o-modal_title">Tutoriais</h2>
        <q-btn
        flat
        icon="close"
        @click="closeTutorial"/>
      </div>
      <div class="o-modal_content m-tutorials">
        <q-card class="m-card m-tutorials_tutorial" v-for="item in tutorials" v-bind:key="item.id">
          <q-card-section class="m-tutorials_video">
            <q-video
              :ratio="16/9"
              :src="item.link"
              />
          </q-card-section>
          <q-card-section>
            <h3 class="m-tutorials_video-title">{{ item.title }}</h3>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-dialog>
</template>

<script>
export default {
  name: 'tutorial',
  props: {
    tutorial: Boolean
  },
  data () {
    return {
      tutorials: [
        { id: 1, title: 'Como realizar uma atividade do tipo quiz', link: 'https://www.youtube.com/embed/0YF8vecQWYs' },
        { id: 2, title: 'Como realizar uma atividade do tipo listening', link: 'https://www.youtube.com/embed/0YF8vecQWYs' },
        { id: 3, title: 'Como realizar uma atividade do tipo reading', link: 'https://www.youtube.com/embed/0YF8vecQWYs' },
        { id: 4, title: 'Como realizar uma atividade do tipo complete', link: 'https://www.youtube.com/embed/0YF8vecQWYs' }
      ]
    }
  },
  methods: {
    closeTutorial () {
      this.$emit('close')
    }
  }
}
</script>
