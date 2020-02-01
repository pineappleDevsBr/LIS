<template>
  <div>
    <q-card class="m-card" v-for="item in activities" v-bind:key="item.id">
      <q-card-section class="m-activities_information">
        <img class="m-activities_icon" :src="`statics/activities/${item.icon}`" alt="">
        <div>
          <h2 class="m-activities_title">{{item.title}}</h2>
          <p class="m-activities_activitie">{{item.activitie}}</p>
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
      activities: [
        { id: 1, title: 'Quiz', icon: 'quiz.svg', activitie: 'Pronomes' },
        { id: 2, title: 'Videos', icon: 'interactive-content.svg', activitie: 'Substantivos' },
        { id: 3, title: 'Leitura', icon: 'read.svg', activitie: 'Verbo To be' }
      ]
    }
  }
}
</script>
