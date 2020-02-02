<template>
  <div>
    <q-card class="m-card" v-for="item in activities" v-bind:key="item.id" @click="startLearn(item.start)">
      <q-card-section class="m-activities_information">
        <img class="m-activities_icon" :src="`statics/activities/${item.icon}`" alt="">
        <div>
          <h2 class="m-activities_title">{{item.title}}</h2>
          <p class="m-activities_activitie">{{item.activitie}}</p>
        </div>
      </q-card-section>
      <q-card-section>
        <progressBar :progress="item.progress"></progressBar>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import progressBar from '../components/progress-bar'

export default {
  name: 'Activities',
  components: {
    progressBar
  },
  data () {
    return {
      activities: [
        { id: 1, title: 'Quiz', icon: 'quiz.svg', activitie: 'Pronomes', start: 'quiz', progress: { showValue: false, levelUp: 100, xp: 80 } },
        { id: 2, title: 'Videos', icon: 'interactive-content.svg', activitie: 'Substantivos', start: 'watch', progress: { showValue: false, levelUp: 350, xp: 180 } },
        { id: 3, title: 'Leitura', icon: 'read.svg', activitie: 'Verbo To be', start: 'reading', progress: { showValue: false, levelUp: 650, xp: 20 } }
      ]
    }
  },
  methods: {
    startLearn (next) {
      this.$router.push({ name: next })
    }
  }
}
</script>
