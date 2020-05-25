<template>
  <q-dialog
  v-model="terms"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
  <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
    <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
      <h2 class="o-modal_title">{{ $t('profile.terms.header') }}</h2>
      <q-btn
      flat
      icon="close"
      @click="closeTerms"/>
    </div>
    <div class="o-modal_content m-terms">
      <q-card class="m-card">
        <q-card-section>
          <div class="a-title -primary -left">{{ $t('profile.terms.terms') }}</div>
          <div class="a-text m-terms_text">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.

            Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.

            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </div>

          <div class="a-title -primary -left">{{ $t('profile.terms.copy') }}</div>
          <div class="a-text m-terms_text">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.

            Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.

            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
  </q-dialog>
</template>

<script>
export default {
  name: 'Terms',
  props: {
    terms: Boolean
  },
  methods: {
    closeTerms () {
      this.$emit('close')
    }
  }
}
</script>
