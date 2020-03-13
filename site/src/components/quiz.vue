<template>
  <q-dialog
  v-model="quiz"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
        <h2 class="o-modal_title">Quiz</h2>
        <q-btn
        flat
        icon="close"
        @click="closeQuiz"/>
      </div>
      <div class="o-modal_content">
        <q-stepper
          v-model="step"
          ref="stepper"
          contracted
          dense
          flat
          color="primary"
          animated
        >
          <q-step :name="question.id" :title="`Question ${question.id}`" icon="edit" :done="step > index" v-for="(question, index) in questions" v-bind:key="question.id">
            <div class="quiz">
              <div class="m-quiz_title">
                <div>
                  {{ question.question }}
                </div>
                {{ question.text }}
              </div>
              <div>
                <q-card class="m-card" v-for="item in question.answers" v-bind:key="item.id">
                  <q-radio keep-color v-model="question.answer" :val="item.id" :label="item.answer" class="full-width" color="accent" />
                </q-card>
              </div>
            </div>
          </q-step>
          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 10 ? 'Finalizar' : 'Próximo'" />
              <q-btn v-if="step > 1 " flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm"/>
            </q-stepper-navigation>
        </template>
      </q-stepper>
      </div>
    </div>
  </q-dialog>
</template>

<script>
export default {
  name: 'Quiz',
  props: {
    quiz: Boolean
  },
  data () {
    return {
      step: 1,
      progress: { showValue: true, levelUp: 10, xp: 0 },
      questions: [
        { id: 1,
          question: 'Qual a melhor tradução para:',
          text: 'I am from Brazil!',
          answer: null,
          answers: [
            { id: 1, answer: 'Eu sou do Brasil!' },
            { id: 2, answer: 'Eu vou para o Brasil!' },
            { id: 3, answer: 'Meus pais são do Brasil!' },
            { id: 4, answer: 'Vamos para o Brasil!' }
          ]
        },
        { id: 2,
          question: 'Qual a melhor tradução para:',
          text: 'I am from Brazil!',
          answer: null,
          answers: [
            { id: 1, answer: 'Eu sou do Brasil!' },
            { id: 2, answer: 'Eu vou para o Brasil!' },
            { id: 3, answer: 'Meus pais são do Brasil!' },
            { id: 4, answer: 'Vamos para o Brasil!' }
          ]
        },
        { id: 3,
          question: 'Qual a melhor tradução para:',
          text: 'I am from Brazil!',
          answer: null,
          answers: [
            { id: 1, answer: 'Eu sou do Brasil!' },
            { id: 2, answer: 'Eu vou para o Brasil!' },
            { id: 3, answer: 'Meus pais são do Brasil!' },
            { id: 4, answer: 'Vamos para o Brasil!' }
          ]
        },
        { id: 4,
          question: 'Qual a melhor tradução para:',
          text: 'I am from Brazil!',
          answer: null,
          answers: [
            { id: 1, answer: 'Eu sou do Brasil!' },
            { id: 2, answer: 'Eu vou para o Brasil!' },
            { id: 3, answer: 'Meus pais são do Brasil!' },
            { id: 4, answer: 'Vamos para o Brasil!' }
          ]
        },
        { id: 5,
          question: 'Qual a melhor tradução para:',
          text: 'I am from Brazil!',
          answer: null,
          answers: [
            { id: 1, answer: 'Eu sou do Brasil!' },
            { id: 2, answer: 'Eu vou para o Brasil!' },
            { id: 3, answer: 'Meus pais são do Brasil!' },
            { id: 4, answer: 'Vamos para o Brasil!' }
          ]
        },
        { id: 6,
          question: 'Qual a melhor tradução para:',
          text: 'I am from Brazil!',
          answer: null,
          answers: [
            { id: 1, answer: 'Eu sou do Brasil!' },
            { id: 2, answer: 'Eu vou para o Brasil!' },
            { id: 3, answer: 'Meus pais são do Brasil!' },
            { id: 4, answer: 'Vamos para o Brasil!' }
          ]
        },
        { id: 7,
          question: 'Qual a melhor tradução para:',
          text: 'I am from Brazil!',
          answer: null,
          answers: [
            { id: 1, answer: 'Eu sou do Brasil!' },
            { id: 2, answer: 'Eu vou para o Brasil!' },
            { id: 3, answer: 'Meus pais são do Brasil!' },
            { id: 4, answer: 'Vamos para o Brasil!' }
          ]
        },
        { id: 8,
          question: 'Qual a melhor tradução para:',
          text: 'I am from Brazil!',
          answer: null,
          answers: [
            { id: 1, answer: 'Eu sou do Brasil!' },
            { id: 2, answer: 'Eu vou para o Brasil!' },
            { id: 3, answer: 'Meus pais são do Brasil!' },
            { id: 4, answer: 'Vamos para o Brasil!' }
          ]
        },
        { id: 9,
          question: 'Qual a melhor tradução para:',
          text: 'I am from Brazil!',
          answer: null,
          answers: [
            { id: 1, answer: 'Eu sou do Brasil!' },
            { id: 2, answer: 'Eu vou para o Brasil!' },
            { id: 3, answer: 'Meus pais são do Brasil!' },
            { id: 4, answer: 'Vamos para o Brasil!' }
          ]
        },
        { id: 10,
          question: 'Qual a melhor tradução para:',
          text: 'I am from Brazil!',
          answer: null,
          answers: [
            { id: 1, answer: 'Eu sou do Brasil!' },
            { id: 2, answer: 'Eu vou para o Brasil!' },
            { id: 3, answer: 'Meus pais são do Brasil!' },
            { id: 4, answer: 'Vamos para o Brasil!' }
          ]
        }
      ]
    }
  },
  methods: {
    closeQuiz () {
      this.$emit('closeQuiz')
    },
    next () {
      console.log('Próximo')
    }
  }
}
</script>
