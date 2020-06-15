<template>
  <q-dialog
  v-model="search"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
    <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
        <h2 class="o-modal_title">Pesquisar amigos</h2>
        <q-btn
        flat
        icon="close"
        @click="closeSearch"/>
      </div>
      <div class="o-modal_content">
        <q-form @submit="searchFriend" class="m-search_search">
          <q-input dense class="m-search_input" v-model="filter" label="Pesquise pelo nome ou e-mail" />
          <q-btn class="m-search_btn-round" round icon="search" type="submit"/>
        </q-form>
        <h2 class="m-search_title">Amigos encontrados</h2>
        <div>
          <q-card class="m-card" v-for="item in friendList" v-bind:key="item.id">
            <q-card-section class="m-friends_card">
              <div class="m-friends_profile">
                <img class="m-friends_avatar" :src="`https://api.adorable.io/avatars/75/${item.avatar}`" :alt="`adorable avatar`">
                <div>
                  <h2 class="m-friends_username q-dark_title">{{item.name}}</h2>
                  <p class="m-friends_level">Nível: {{item.level ? item.level : 1}}</p>
                  <p class="m-friends_xp">{{item.xp}}XP</p>
                </div>
              </div>
              <div>
                <div class="m-friends_confirm">
                  <q-btn no-caps rounded class="m-search_btn" label="Ver perfil" @click="viewFriend(item.id)"/>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <q-btn no-caps rounded class="m-search_btn" label="Carregar mais amigos" @click="loadMore()" v-if="searchFilter.length === 0"/>
      <q-btn no-caps rounded class="m-search_btn" label="Mostrar todos" @click="searchFilter = []" v-else/>
    </div>
  </q-dialog>
</template>

<script>
import store from '../store/index'

export default {
  name: 'SearchFriend',
  props: {
    search: Boolean,
    list: Array
  },

  data () {
    return {
      page: 1,
      filter: '',
      searchFilter: []
    }
  },

  methods: {
    viewFriend (id) {
      this.$router.push(`/profile/${id}`)
    },

    async searchFriend () {
      const response = await store().dispatch('friends/search', this.filter)
      this.searchFilter = response
    },

    async loadMore () {
      this.page += 1
      await store().dispatch('friends/searchAll', this.page)
    },

    async closeSearch () {
      this.page = 1
      this.$emit('closeSearch')
      await store().dispatch('friends/cleanList')
    }
  },
  computed: {
    friendList () {
      if (this.searchFilter.length > 0) return this.searchFilter
      return this.list
    }
  }
}
</script>
