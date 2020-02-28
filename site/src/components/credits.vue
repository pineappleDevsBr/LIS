<template>
  <q-dialog
  v-model="credits"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
  <div class="o-modal">
    <div class="o-modal_header">
      <h2 class="o-modal_title">Créditos</h2>
      <q-btn
      flat
      icon="close"
      @click="closeCredits"/>
    </div>
    <div class="o-modal_content m-credits">
      <div class="a-text m-credits_text">
        LIS é um projeto open souce na qual utiliza como
        grande parte de sua mídia, fontes externas
        reproduzidas por artistas não ligados a nós.
        Sendo assim, temos o dever de citá-los em
        nossa plataforma com créditos à seu trabalho,
        pelo seu apoio de forma indireta ao
        desenvolvimento do app.
      </div>
      <div class="a-title -sub m-credits_title">Ícones</div>
      <div v-for="icon in icons" v-bind:key="icon.id" class="m-credits_icons">
        <img class="m-credits_image" :src="`statics/credits/icons/${icon.name}.svg`" alt="">
        <span class="m-credits_credit" v-html="icon.credit"/>
      </div>
      <div class="a-title -sub m-credits_title">Ilustrações</div>
      <div v-for="illustration in illustrations" v-bind:key="illustration.id" class="m-credits_icons">
        <img class="m-credits_image -big" :src="`statics/credits/illustrations/${illustration.name}.jpg`" alt="">
        <span class="m-credits_credit" v-html="illustration.credit"/>
      </div>
    </div>
  </div>
  </q-dialog>
</template>

<script>
export default {
  name: 'Credits',
  props: {
    credits: Boolean
  },
  data () {
    return {
      icons: [
        { name: 'buy', credit: 'Icons made by <a target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>' },
        { name: 'gift-card', credit: 'Icons made by <a target="_blank" href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>' }
      ],
      illustrations: [
        { name: 'conceito-de-universidade-plana', credit: '<a target="_blank" href="https://br.freepik.com/fotos-vetores-gratis/escola">Escola vetor criado por freepik - br.freepik.com</a>' }
      ]
    }
  },
  methods: {
    closeCredits () {
      this.$emit('closeCredits')
    }
  }
}
</script>
