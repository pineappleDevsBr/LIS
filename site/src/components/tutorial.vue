<template>
  <q-dialog
  v-model="tutorial"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
        <h2 class="o-modal_title">{{ $t('profile.tutorials.title')}}</h2>
        <q-btn
        flat
        icon="close"
        @click="closeTutorial"/>
      </div>
      <div class="o-modal_content m-tutorials">
        <q-card class="m-card m-tutorials_tutorial" v-for="item in getTutorials" v-bind:key="item.id">
          <q-card-section class="m-tutorials_video">
            <q-video
              :ratio="16/9"
              :src="item.link"
              />
          </q-card-section>
          <q-card-section>
            <h3 class="m-tutorials_video-title">{{ item.name }}</h3>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import store from '../store/index'
import { mapGetters } from 'vuex'

export default {
  name: 'tutorial',
  props: {
    tutorial: Boolean
  },
  methods: {
    closeTutorial () {
      this.$emit('close')
    }
  },
  computed: {
    ...mapGetters('tutorials', ['getTutorials'])
  },
  async mounted () {
    await store().dispatch('tutorials/getTutorials')
  }
}
</script>
