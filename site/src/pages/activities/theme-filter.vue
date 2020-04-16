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
        <q-card class="m-card" v-for="task in tasks.tasks" v-bind:key="task.id"  @click="openActivitie(task.id, task.task_type_id, task.xp, task.money)">
          <q-card-section class="m-text_card -no-padding-bottom">
            <div class="m-text_title">{{task.title}}</div>
            <div class="m-text_xp">{{task.xp}} XP</div>
          </q-card-section>
          <q-card-section class="m-text_card -no-padding-top">
            <q-rating
              v-model="task.evaluations"
              size="1.5em"
              color="orange"
              readonly
            />
          </q-card-section>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>
    <btnBack @back="back"/>
    <quiz :quiz="openQuiz" :questions="questions" :taskType="taskType" @closeQuiz="closeActivitie"/>
    <reading :reading="openReading" @closeReading="closeActivitie"/>
    <listening :listening="openListening" @closeReading="closeActivitie"/>
    <feedback
      :feedback="openFeedback"
      :feedbackResults="feedbackResults"
      :questions="questions"
      :xp="xp"
      :money="money"
      @close="closeFeedback"
      @remakeActivitie="remakeActivitie"
    />
  </div>
</template>

<script>
import quiz from '../../components/quiz'
import reading from '../../components/reading'
import listening from '../../components/listening'
import feedback from '../../components/feedback'
import btnBack from '../../components/ui/btnBack'
import taskType from '../../utils/type_task'
import store from '../../store'
import { mapGetters } from 'vuex'

export default {
  name: 'ThemeFilter',
  components: {
    quiz,
    reading,
    listening,
    feedback,
    btnBack
  },
  data () {
    return {
      tab: 1,
      activitie: this.$route.name,
      openQuiz: false,
      openReading: false,
      openListening: false,
      openComplete: false,
      taskType: null,
      typeId: null,
      questions: null,
      xp: null,
      money: null,
      openFeedback: false,
      feedbackResults: {}
    }
  },
  methods: {
    async openActivitie (id, typeId, xp, money) {
      const { questions, task } = await store().dispatch('task/getQuestions', id)
      this.questions = questions
      this.taskType = task.task_type_id
      this.xp = xp
      this.money = money
      this.typeId = typeId

      this.selectActivitie(this.typeId)
    },
    closeActivitie (event) {
      this.openQuiz = false
      this.openListening = false
      this.openComplete = false
      this.openReading = false
      if (event) {
        this.openFeedback = true
        this.feedbackResults = event
      }
    },
    closeFeedback () {
      this.openFeedback = false
    },
    remakeActivitie () {
      this.openFeedback = false
      this.selectActivitie(this.typeId)
    },
    selectActivitie (typeId) {
      switch (typeId) {
        case 1:
          this.openQuiz = true
          break
        case 2:
          this.openListening = true
          break
        case 3:
          this.openComplete = true
          break
        case 4:
          this.openReading = true
          break
        default:
          this.openQuiz = true
          break
      }
    },
    back () {
      this.$router.push({ name: 'home' })
    }
  },
  computed: {
    ...mapGetters('task', ['getTask'])
  },
  async mounted () {
    await store().dispatch('task/getTask', taskType[this.activitie])
  }
}
</script>
