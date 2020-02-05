<template>
  <div>
    <q-tabs
    v-model="tab"
    inline-label
    dense
    no-caps
    narrow-indicator
    class="m-text_tabs">
      <q-tab v-for="tab in tabs" :key="tab.name" v-bind="tab" class="m-text_tab" />
    </q-tabs>
    <div v-for="item in texts" v-bind:key="item.id">
      <q-card class="m-card" v-if="item.theme === tab" @click="openReadingActive(item.id)">
        <q-card-section class="m-text_card">
          <div class="m-text_title">{{item.title}}</div>
          <div class="m-text_xp">{{item.xp}} XP</div>
        </q-card-section>
      </q-card>
    </div>
    <reading :reading="openReading" @closeReading="closeReading"></reading>
  </div>
</template>

<script>
import reading from '../../components/reading'
const allTabs = [
  { name: 'books', label: 'Livros' },
  { name: 'movies', label: 'Filmes' }
]
export default {
  name: 'Hub',
  components: {
    reading
  },
  data () {
    return {
      tab: 'books',
      openReading: false,
      tabs: allTabs.slice(0, 2),
      texts: [
        { id: 1, title: 'Harry Potter', xp: '15', theme: 'books' },
        { id: 2, title: 'Vingadores: Guerra infinita', xp: '15', theme: 'movies' },
        { id: 3, title: 'Coração de tinta', xp: '15', theme: 'books' }
      ]
    }
  },
  methods: {
    openReadingActive (id) {
      this.openReading = true
    },
    closeReading () {
      this.openReading = false
    }
  }
}
</script>
