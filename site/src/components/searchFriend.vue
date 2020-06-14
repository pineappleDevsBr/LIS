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
        <div class="m-search_search">
          <q-input dense class="m-search_input" v-model="filter" label="Pesquise pelo nome ou e-mail" />
          <q-btn class="m-search_btn-round" round icon="search"/>
        </div>
        <h2 class="m-search_title">Amigos encontrados</h2>
        <div>
          <q-card class="m-card" v-for="item in list" v-bind:key="item.id">
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
                  <q-btn no-caps rounded class="m-search_btn" label="Solicitar amizade" @click="addFriend(item.id)"/>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
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
      filter: ''
    }
  },

  methods: {
    async addFriend (id) {
      const payload = { friend_id: id }

      const response = await store().dispatch('friends/sendInvites', payload)
      console.log(response)
      if (response.status) {
        this.$q.notify({
          color: 'positive',
          message: 'Solicitação enviada com sucesso!',
          icon: 'sentiment_satisfied_alt'
        })
      } else {
        this.$q.notify({
          color: 'negative',
          message: 'Ocorreu um erro ao realizar a solicitação, tente novamente mais tarde!',
          icon: 'report_problem'
        })
      }
    },
    closeSearch () {
      this.$emit('closeSearch')
    }
  }
}
</script>
