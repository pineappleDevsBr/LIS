<template>
  <div>
    {{ getMyThemes }}
    <q-tabs
    v-model="tab"
    inline-label
    dense
    no-caps
    narrow-indicator
    class="m-text_tabs">
      <q-tab v-for="tab in getMyThemes" v-bind:key="tab.id" :label="tab.name" :name="tab.id" class="m-text_tab" />
    </q-tabs>
    <div v-for="item in texts" v-bind:key="item.id">
      <q-card class="m-card" v-if="item.theme === tab" @click="openReadingActive(item.id)">
        <q-card-section class="m-text_card">
          <div class="m-text_title">{{item.title}}</div>
          <div class="m-text_xp">{{item.xp}} XP</div>
        </q-card-section>
      </q-card>
    </div>
    <btnBack @back="back"/>
    <reading :reading="openReading" @closeReading="closeReading"/>
  </div>
</template>

<script>
import reading from '../../components/reading'
import btnBack from '../../components/ui/btnBack'
import { mapGetters } from 'vuex'

export default {
  name: 'Texts',
  components: {
    reading,
    btnBack
  },
  data () {
    return {
      tab: 1,
      openReading: false,
      texts: [
        { id: 1, title: 'Harry Potter', xp: '15', theme: 1 },
        { id: 2, title: 'Harry Potter', xp: '15', theme: 1 },
        { id: 3, title: 'Harry Potter', xp: '15', theme: 2 },
        { id: 4, title: 'Harry Potter', xp: '15', theme: 2 },
        { id: 5, title: 'Harry Potter', xp: '15', theme: 2 },
        { id: 6, title: 'Harry Potter', xp: '15', theme: 2 },
        { id: 7, title: 'Harry Potter', xp: '15', theme: 3 }
      ]
    }
  },
  methods: {
    openReadingActive (id) {
      this.openReading = true
    },
    closeReading () {
      this.openReading = false
    },
    back () {
      this.$router.push({ name: 'home' })
    }
  },
  computed: {
    ...mapGetters('theme', ['getMyThemes'])
  }
}
</script>
