<template>
  <div>
    <q-card class="m-card" v-for="item in activities" v-bind:key="item.id">
      <q-card-section class="o-activities_information">
        <img class="o-activities_icon" :src="`${path}${item.icon}`" alt="">
        <div>
          <h2 class="o-activities_title">{{item.title}}</h2>
          <p class="o-activities_activitie">{{item.activitie}}</p>
        </div>
      </q-card-section>
      <q-card-section>
        <progressBar></progressBar>
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
      path: 'statics/activities/',
      activities: [
        { id: 1, title: 'Quiz', icon: 'quiz.svg', activitie: 'Pronomes' },
        { id: 2, title: 'Videos', icon: 'interactive-content.svg', activitie: 'Substantivos' },
        { id: 3, title: 'Leitura', icon: 'read.svg', activitie: 'Verbo To be' }
      ]
    }
  }
}
</script>
