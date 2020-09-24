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
          <h2 class="a-title -primary -left">{{ $t('profile.terms.privacyPolicy') }}</h2>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.privacyText1') }}
          </p>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.privacyText2') }}
          </p>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.privacyText3') }}
          </p>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.privacyText4') }}
          </p>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.privacyText5') }}
          </p>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.privacyText6') }}
          </p>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.privacyText7') }}
          </p>
          <h2 class="a-title -primary -left">{{ $t('profile.terms.cookiesPolicy') }}</h2>
          <h3 class="a-title -primary -left -light">{{ $t('profile.terms.cookiesTitle1') }}</h3>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.cookiesText1') }}
          </p>

          <h3 class="a-title -primary -left -light">{{ $t('profile.terms.cookiesTitle2') }}</h3>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.cookiesText2') }}
          </p>

          <h3 class="a-title -primary -left -light">{{ $t('profile.terms.cookiesTitle3') }}</h3>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.cookiesText3') }}
          </p>

          <h3 class="a-title -primary -left -light">{{ $t('profile.terms.cookiesTitle4') }}</h3>
          <ul class="a-text m-terms_text">
            <li class="m-terms_list-item">
              <p>{{ $t('profile.terms.cookiesText4') }}</p>
              <p>{{ $t('profile.terms.cookiesText5') }}</p>
            </li>
            <li class="m-terms_list-item">
              <p>{{ $t('profile.terms.cookiesText6') }}</p>
              <p>{{ $t('profile.terms.cookiesText7') }}</p>
            </li>
            <li class="m-terms_list-item">
              <p>{{ $t('profile.terms.cookiesText8') }}</p>
              <p>{{ $t('profile.terms.cookiesText9') }}</p>
            </li>
            <li class="m-terms_list-item">
              <p>{{ $t('profile.terms.cookiesText10') }}</p>
              <p>{{ $t('profile.terms.cookiesText11') }}</p>
            </li>
            <li class="m-terms_list-item">
              <p>{{ $t('profile.terms.cookiesText12') }}</p>
              <p>{{ $t('profile.terms.cookiesText13') }}</p>
            </li>
            <li class="m-terms_list-item">
              <p>{{ $t('profile.terms.cookiesText14') }}</p>
              <p>{{ $t('profile.terms.cookiesText15') }}</p>
            </li>
            <li class="m-terms_list-item">
              <p>{{ $t('profile.terms.cookiesText16') }}</p>
              <p>{{ $t('profile.terms.cookiesText17') }}</p>
            </li>
          </ul>
          <h3 class="a-title -primary -left -light">{{ $t('profile.terms.cookiesTitle5') }}</h3>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.cookiesText18') }}
          </p>
          <!-- <ul class="a-text m-terms_text">
            <li class="m-terms_list-item">
              <p>{{ $t('profile.terms.cookiesText19') }}</p>
            </li>
          </ul> -->
          <!-- <p class="a-text m-terms_text">
            {{ $t('profile.terms.cookiesText20') }}
          </p> -->
          <ul class="a-text m-terms_text">
            <li class="m-terms_list-item">
              <p>{{ $t('profile.terms.cookiesText21') }}</p>
            </li>
            <li class="m-terms_list-item">
              <p>{{ $t('profile.terms.cookiesText22') }}</p>
            </li>
            <li class="m-terms_list-item">
              <p>{{ $t('profile.terms.cookiesText23') }}</p>
            </li>
          </ul>
          <h3 class="a-title -primary -left -light">{{ $t('profile.terms.cookiesTitle6') }}</h3>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.cookiesText24') }}
          </p>
          <p class="a-text m-terms_text">
            {{ $t('profile.terms.cookiesText25') }} <strong>{{ $t('profile.terms.cookiesText26') }}</strong>.
          </p>
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
