<template>
  <q-dialog
  v-model="credits"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
  <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
    <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
      <h2 class="o-modal_title">{{ $t('profile.credits.header') }}</h2>
      <q-btn
      flat
      icon="close"
      @click="closeCredits"/>
    </div>
    <div class="o-modal_content m-credits">
      <div class="a-text m-credits_text">
        {{ $t('profile.credits.text') }}
      </div>
      <div class="a-title -sub m-credits_title">{{ $t('profile.credits.icons') }}</div>
      <div v-for="icon in icons" v-bind:key="icon.id" class="m-credits_icons">
        <img class="m-credits_image" :src="`statics/credits/icons/${icon.name}.svg`" alt="">
        <span class="m-credits_credit" v-html="icon.credit"/>
      </div>
      <div class="a-title -sub m-credits_title">{{ $t('profile.credits.vectors') }}</div>
      <div v-for="illustration in illustrations" v-bind:key="illustration.id" class="m-credits_icons">
        <img class="m-credits_image -big" :src="`statics/credits/illustrations/${illustration.name}.png`" alt="">
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
        { name: 'welcome', credit: '<a href="https://www.freepik.com/free-photos-vectors/school">School vector created by freepik - www.freepik.com</a>' },
        { name: 'acess-step-1', credit: '<a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by pikisuperstar - www.freepik.com</a>' },
        { name: 'acess-step-2', credit: '<a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>' },
        { name: 'acess-step-3', credit: '<a href="https://www.freepik.com/free-photos-vectors/illustration">Illustration vector created by stories - www.freepik.com</a>' },
        { name: 'login', credit: '<a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>' },
        { name: 'forgot', credit: '<a href="https://www.freepik.com/free-photos-vectors/technology">Technology vector created by stories - www.freepik.com</a>' },
        { name: 'reset', credit: '<a href="https://www.freepik.com/free-photos-vectors/people">People vector created by stories - www.freepik.com</a>' },
        { name: 'without-internet', credit: '<a href="https://www.freepik.com/free-photos-vectors/design">Design vector created by freepik - www.freepik.com</a>' },
        { name: 'error-404', credit: '<a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by pikisuperstar - www.freepik.com</a>' },
        { name: 'e-mail_welcome', credit: '<a href="https://www.freepik.com/free-photos-vectors/people">People vector created by freepik - www.freepik.com</a>' },
        { name: 'home-modal-tutorial', credit: '<a href="https://www.freepik.com/free-photos-vectors/school">School vector created by freepik - www.freepik.com</a>' },
        { name: 'hub-modal-convite', credit: '<a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>' }
      ]
    }
  },
  methods: {
    closeCredits () {
      this.$emit('close')
    }
  }
}
</script>
