<template>
  <div>
    <div v-for="item in activities" v-bind:key="`skl_${item.id}`">
      <q-card class="m-skeleton" v-if="!item.progress.active">
        <q-card-section class="m-activities_information">
          <q-skeleton type="QAvatar" class="m-skeleton_avatar" />
          <div>
            <q-skeleton type="text" class="m-skeleton_title" />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div v-for="item in activities" v-bind:key="item.id" @click="startLearn(item.start)">
      <q-card class="m-card" v-if="item.progress.active">
        <q-card-section class="m-activities_information">
          <img class="m-activities_icon" :src="`statics/activities/${item.icon}`" alt="">
          <div>
            <h2 class="m-activities_title q-dark_title">{{item.title}}</h2>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="tutorial">
      <q-card class="m-card">
        <q-card-section>
          <div class="text-h6">{{$t('tutorial.title')}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{$t('tutorial.text')}}
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{$t('tutorial.accessIn')}}
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{$t('tutorial.goodStudies')}}
        </q-card-section>

        <q-img src="statics/activities/tutorials.png" />
        <q-card-actions align="between">
          <q-checkbox keep-color v-model="repeatShowTutorial" :label="$t('tutorial.repeatShowTutorial')" color="primary" />
          <div class="m-tutorials_modal-group">
            <q-btn class="m-tutorials_modal-btn" rounded :label="$t('tutorial.watchNow')" color="primary" @click="viewTutorial(true)" />
            <q-btn class="m-tutorials_modal-btn" rounded :label="$t('tutorial.watchLater')" color="primary" @click="viewTutorial(false)" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

export default {
  name: 'Activities',
  data () {
    return {
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
  },
  computed: {
    activities () {
      return [
        { id: 1, title: this.$t('activities.quiz'), icon: 'quiz.svg', start: 'quiz', progress: { showValue: false, levelUp: 10, xp: 0, active: true } },
        { id: 2, title: this.$t('activities.listening'), icon: 'headphones.svg', start: 'listening', progress: { showValue: false, levelUp: 10, xp: 0, active: true } },
        { id: 3, title: this.$t('activities.complete'), icon: 'content.svg', start: 'complete', progress: { showValue: false, levelUp: 10, xp: 0, active: true } },
        { id: 4, title: this.$t('activities.reading'), icon: 'read.svg', start: 'reading', progress: { showValue: false, levelUp: 10, xp: 0, active: true } }
      ]
    }
  }
}
</script>
