<template>
  <q-dialog
  v-model="feedback"
  persistent
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="m-feedback bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="a-title -primary -left">Confira suas respostas!</div>
      <div class="a-text m-feedback_status">Status: <span class=" m-feedback_status" :class="`-${feedbackResults.approved ? 'positive' : 'negative'}`">{{ feedbackResults.approved ? 'Aprovado' : 'Reprovado' }}</span></div>
      <q-separator />

      <div v-for="(question, index) in questions" v-bind:key="question.id">
        <div class="m-feedback_answere" :class="`-${feedbackResults.results[index].status ? 'positive' : 'negative'}`">
          <q-icon :name="`${feedbackResults.results[index].status ? 'done' : 'close'}`"/>
          {{ question.question }} {{ question.text }}
        </div>
      </div>

      <q-btn rounded class="a-btn -dark">{{ feedbackResults.approved ? 'Okay' : 'Refazer' }}</q-btn>
    </div>
  </q-dialog>
</template>

<script>
export default {
  name: 'Feedback',
  props: {
    feedback: Boolean,
    feedbackResults: Object,
    questions: Array
  }
}
</script>
