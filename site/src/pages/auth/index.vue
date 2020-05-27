<template>
  <div>
    <div v-for="item in activities" v-bind:key="`skl_${item.id}`">
      <q-card class="m-skeleton" v-if="!item.progress.active">
        <q-card-section class="m-activities_information">
          <q-skeleton type="QAvatar" class="m-skeleton_avatar" />
          <div>
            <q-skeleton type="text" class="m-skeleton_title" />
            <q-skeleton type="text" class="m-skeleton_subtitle" />
          </div>
        </q-card-section>
        <q-card-section>
          <q-skeleton type="rect"/>
        </q-card-section>
      </q-card>
    </div>
    <div v-for="item in activities" v-bind:key="item.id" @click="startLearn(item.start)">
      <q-card class="m-card" v-if="item.progress.active">
        <q-card-section class="m-activities_information">
          <img class="m-activities_icon" :src="`statics/activities/${item.icon}`" alt="">
          <div>
            <h2 class="m-activities_title q-dark_title">{{item.title}}</h2>
            <p class="m-activities_activitie">{{item.activitie}}</p>
          </div>
        </q-card-section>
        <q-card-section>
          <progressBar :progress="item.progress"></progressBar>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="tutorial">
      <q-card class="m-card">
        <q-card-section>
          <div class="text-h6">Olá, bem vindo ao LIS!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Antes de começar gostaria de saber se você deseja assistir aos vídeos tutoriais agora.
        </q-card-section>

        <q-card-section class="q-pt-none">
          Se preferir, pode acessar os mesmos vídeos em Perfil > Clique aqui para editar seus dados > Tutoriais.
        </q-card-section>

        <q-card-section class="q-pt-none">
          Bons estudos!
        </q-card-section>

        <q-img src="statics/activities/tutorials.png" />
        <q-card-actions align="between">
          <q-checkbox keep-color v-model="repeatShowTutorial" label="Não mostrar novamente" color="primary" />
          <div>
            <q-btn rounded label="Assistir agora" color="primary" @click="viewTutorial(true)"  class="q-mr-md"/>
            <q-btn rounded label="Assistir mais tarde" color="primary" @click="viewTutorial(false)" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import progressBar from '../../components/progress-bar'

export default {
  name: 'Activities',
  components: {
    progressBar
  },
  data () {
    return {
      activities: [
        { id: 1, title: 'Quiz', icon: 'quiz.svg', activitie: 'Pronomes', start: 'quiz', progress: { showValue: false, levelUp: 10, xp: 0, active: true } },
        { id: 2, title: 'Diga-me o que ouviu', icon: 'headphones.svg', activitie: 'Diágolo', start: 'listening', progress: { showValue: false, levelUp: 10, xp: 0, active: true } },
        { id: 3, title: 'Complete a frase', icon: 'content.svg', activitie: 'Substantivos', start: 'complete', progress: { showValue: false, levelUp: 10, xp: 0, active: true } },
        { id: 4, title: 'Leitura', icon: 'read.svg', activitie: 'Verbo To be', start: 'reading', progress: { showValue: false, levelUp: 10, xp: 0, active: true } }
      ],
      tutorial: this.$q.cookies.get('lis_tutorial'),
      repeatShowTutorial: false
    }
  },
  methods: {
    startLearn (next) {
      this.$router.push({ name: next })
    },
    viewTutorial (response) {
      if (response) this.$router.push({ name: 'profile', params: { view: true } })
      if (this.repeatShowTutorial) this.$q.cookies.set('lis_tutorial', false)
      this.tutorial = false
    }
  }
}
</script>
