<template>
  <q-dialog
  v-model="feedback"
  persistent
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="m-feedback bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="a-title -primary -left">{{ feedbackResults.results ? 'Confira suas respostas!' : 'Confira seus prêmios por concluir a atividade!'}}</div>
      <div class="a-text m-feedback_status" v-if="feedbackResults.results">Status: <span class=" m-feedback_status" :class="`-${feedbackResults.approved ? 'positive' : 'negative'}`">{{ feedbackResults.approved ? 'Aprovado' : 'Reprovado' }}</span></div>
      <div class="m-feedback_reward" v-if="feedbackResults.approved">
        <div class="a-text m-feedback_text">
          {{ xp }} XP
        </div>
        <div class="a-text m-feedback_text m-feedback_money">
          {{ money }}
          <img class="m-store_coin" src="statics/store/coin.svg">
        </div>
      </div>
      <div v-if="feedbackResults.values.bonus.xp || feedbackResults.values.bonus.money">
        Bônus:
        <div class="m-feedback_reward" v-if="feedbackResults.approved">
          <div class="a-text m-feedback_text" v-if="feedbackResults.values.bonus.xp">
            {{ feedbackResults.values.bonus.xp }} XP
          </div>
          <div class="a-text m-feedback_text m-feedback_money" v-if="feedbackResults.values.bonus.money">
            {{ (feedbackResults.values.bonus.money).toFixed(0) }}
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
        <q-btn right rounded class="a-btn -dark m-feedback_btn" @click="close">Fechar</q-btn>
        <q-btn right rounded class="a-btn -dark m-feedback_btn" v-if="!feedbackResults.approved" @click="remake">Refazer</q-btn>
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
  methods: {
    close () {
      this.$emit('close')
    },
    remake () {
      this.$emit('remakeActivitie')
    }
  }
}
</script>
