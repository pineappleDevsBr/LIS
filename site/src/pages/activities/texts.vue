<template>
  <div>
    <q-tabs
    v-model="tab"
    inline-label
    shrink
    stretch>
      <q-tab v-for="tab in tabs" :key="tab.name" v-bind="tab" />
    </q-tabs>
    <div v-for="item in texts" v-bind:key="item.id">
      <q-card class="m-card" v-if="item.theme === tab">
        <q-card-section class="m-friends_card">
          <div class="m-friends_profile">
            {{item.title}}
            {{item.xp}} XP
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
const allTabs = [
  { name: 'books', icon: 'mail', label: 'Livros' },
  { name: 'movies', icon: 'alarm', label: 'Filmes' }
]
export default {
  name: 'Hub',
  data () {
    return {
      tab: 'books',
      tabs: allTabs.slice(0, 2),
      texts: [
        { id: 1, title: 'Harry Potter', xp: '15', theme: 'books' },
        { id: 2, title: 'Harry Potter', xp: '15', theme: 'movies' },
        { id: 3, title: 'Harry Potter', xp: '15', theme: 'books' }
      ]
    }
  }
}
</script>
