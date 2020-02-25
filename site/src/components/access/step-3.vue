<template>
  <div class="o-access_step3">
    <div class="a-title -white -sub">
      {{ $t('access.choice_of_themes.title') }}
    </div>
    <q-card class="my-card o-access_selectTheme" style="max-height: 400px; overflow-y: auto;">
      <q-card-section>
         <q-input dense v-model="filter" :label="$t('access.choice_of_themes.search')" />
      </q-card-section>
      <q-card-section>
        {{ $t('access.choice_of_themes.info') }}
      </q-card-section>
      <q-card-section>
        <q-card  class="m-card" v-for="theme in getTheme" v-bind:key="theme.id">
          <q-slide-item @left="onLeft" @right="onRight" right-color="negative">
            <template v-slot:left>
              <q-icon name="done" />
            </template>
            <template v-slot:right>
              <q-icon name="close" />
            </template>
            <q-card-section :class="bgColor">{{theme.name}}</q-card-section>
          </q-slide-item>
        </q-card>
      </q-card-section>
    </q-card>
    <q-btn
    no-caps
    rounded
    outline
    color="primary"
    class="bg-white o-access_btn"
    size="lg"
    :label="$t('access.choice_of_themes.btn')"
    @click="finish"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'step3',
  data () {
    return {
      filter: '',
      bgColor: 'bg-white'
    }
  },
  methods: {
    finish () {
      this.$emit('finish')
    },
    onLeft ({ reset }) {
      this.bgColor = 'bg-accent'
      this.finalize(reset)
    },

    onRight ({ reset }) {
      this.finalize(reset)
    },

    finalize (reset) {
      this.timer = setTimeout(() => {
        reset()
      }, 1000)
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  },
  computed: {
    ...mapGetters('theme', ['getTheme'])
  }
}
</script>
