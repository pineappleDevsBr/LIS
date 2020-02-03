<template>
  <div>
    <div>
      Escolha o tema que você quer ler:
      <q-checkbox keep-color v-model="filter.all" label="Todos" color="primary" />
      <q-checkbox keep-color v-model="filter.movies" label="Filmes" color="primary" />
      <q-checkbox keep-color v-model="filter.books" label="Livros" color="primary" />
    </div>
    <q-card class="m-card" v-for="item in textsFilters" v-bind:key="item.id">
      <q-card-section class="m-friends_card">
        <div class="m-friends_profile">
          {{item.title}}
          {{item.xp}} XP
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Hub',
  data () {
    return {
      filter: {
        all: true,
        movies: false,
        books: false
      },
      texts: [
        { id: 1, title: 'Harry Potter', xp: '15', theme: 'book' }
      ]
    }
  },
  computed: {
    textsFilters () {
      return !this.filter.all ? this.texts.filter(text => {
        return text.theme.includes(this.filter)
      }) : this.texts
    }
  }
}
</script>
