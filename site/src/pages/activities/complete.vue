<template>
  <div>
    <q-tabs
    v-model="tab"
    inline-label
    dense
    no-caps
    narrow-indicator
    class="m-text_tabs">
      <q-tab v-for="tab in getTask" v-bind:key="tab.theme_id" :label="tab.theme" :name="tab.theme_id" class="m-text_tab" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel :name="tasks.theme_id" v-for="tasks in getTask" v-bind:key="tasks.theme_id">
        <q-card class="m-card" v-for="task in tasks.tasks" v-bind:key="task.id"  @click="openQuizActive(task.id)">
          <q-card-section class="m-text_card">
            <div class="m-text_title">{{task.title}}</div>
            <div class="m-text_xp">{{task.xp}} XP</div>
          </q-card-section>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>
    <btnBack @back="back"/>
    <quiz :quiz="openQuiz" @closeQuiz="closeQuiz"/>
  </div>
</template>

<script>
import quiz from '../../components/quiz'
import btnBack from '../../components/ui/btnBack'
import { mapGetters } from 'vuex'
import store from '../../store'
import typeTask from '../../utils/type_task'

export default {
  name: 'Complete',
  components: {
    quiz,
    btnBack
  },
  data () {
    return {
      tab: 1,
      activitie: this.$router.name,
      openQuiz: false
    }
  },
  methods: {
    openQuizActive (id) {
      this.openQuiz = true
    },
    closeQuiz () {
      this.openQuiz = false
    },
    back () {
      this.$router.push({ name: 'home' })
    }
  },
  computed: {
    ...mapGetters('task', ['getTask'])
  },
  async mounted () {
    await store().dispatch('task/getTask', typeTask.quiz)
  }
}
</script>
