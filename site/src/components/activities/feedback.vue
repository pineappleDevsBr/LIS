<template>
  <q-dialog
  v-model="feedback"
  persistent
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="m-feedback bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="a-title -primary -left">{{ feedbackResults.results ? $t('activities.feedback.checkAnswers') : $t('activities.feedback.checkAwards')}}</div>
      <div class="a-text m-feedback_status" v-if="feedbackResults.results">Status: <span class=" m-feedback_status" :class="`-${feedbackResults.approved ? 'positive' : 'negative'}`">{{ feedbackResults.approved ?  $t('activities.feedback.approved') : $t('activities.feedback.disapproved') }}</span></div>
      <div class="m-feedback_reward" v-if="feedbackResults.approved">
        <div class="a-text m-feedback_text">
          {{ xp }} XP
        </div>
        <div class="a-text m-feedback_text m-feedback_money">
          {{ money }}
          <img class="m-store_coin" src="statics/store/coin.svg">
        </div>
      </div>
      <div v-if="bonus.exists">
        {{ $t('activities.feedback.bonus') }}:
        <div class="m-feedback_reward">
          <div class="a-text m-feedback_text" v-if="bonus.xp">
            {{ bonus.xp }} XP
          </div>
          <div class="a-text m-feedback_text m-feedback_money" v-if="bonus.money">
            {{ (bonus.money).toFixed(0) }}
            <img class="m-store_coin" src="statics/store/coin.svg">
          </div>
        </div>
      </div>
      <q-separator />
      <div v-if="feedbackResults.results">
        <div v-for="(question, index) in questions" v-bind:key="question.id">
          <div class="m-feedback_answere" :class="`-${feedbackResults.results[index].status ? 'positive' : 'negative'}`">
            <q-icon :name="`${feedbackResults.results[index].status ? 'done' : 'close'}`"/>
            {{ question.question }} {{ question.text }}
          </div>
        </div>
      </div>
      <div class="m-feedback_actions">
        <q-btn right rounded class="a-btn -dark m-feedback_btn" @click="close">{{ $t('activities.feedback.close') }}</q-btn>
        <q-btn right rounded class="a-btn -dark m-feedback_btn" v-if="!feedbackResults.approved" @click="remake">{{ $t('activities.feedback.remake') }}</q-btn>
      </div>
    </div>
  </q-dialog>
</template>

<script>
export default {
  name: 'Feedback',
  props: {
    feedback: Boolean,
    feedbackResults: Object,
    xp: Number,
    money: Number,
    questions: Array
  },
  data () {
    return {
      bonus: {
        exists: false,
        xp: null,
        money: null
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    remake () {
      this.$emit('remakeActivitie')
    }
  },
  watch: {
    feedbackResults (values) {
      if (values.values !== undefined) {
        if (values.values.bonus.xp || values.values.bonus.money) {
          this.bonus.exists = true
          this.bonus.xp = values.values.bonus.xp
          this.bonus.money = values.values.bonus.money
        }
      }
    }
  }
}
</script>
