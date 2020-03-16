<template>
  <div>
    <div class="m-spotlight m-friends_spotlight">
      <img class="m-spotlight_icon" src="statics/hub/bracelet.svg" alt="Friends">
      Descubra novos amigos! Aprender junto é mais divertido!
      <q-btn class="m-friends_search" no-caps flat label="Pesquisar amigos"/>
    </div>
    <div>
      <h2 class="m-friends_title">Solicitações de amizade</h2>
      <q-card class="m-card" v-for="item in getFriends" v-bind:key="item.id" @click="viewFriend(item.id)">
        <q-card-section class="m-friends_card">
          <div class="m-friends_profile">
            <img class="m-friends_avatar" :src="`https://api.adorable.io/avatars/75/lis-avatar${item.id}.png`" :alt="`adorable avatar lis-avatar${item.id}.png`">
            <div>
              <h2 class="m-friends_username q-dark_title">{{item.name}}</h2>
              <p class="m-friends_level">Nível: {{item.level ? item.level : 1}}</p>
              <p class="m-friends_xp">{{item.xp}}XP</p>
            </div>
          </div>
          <div>
            <img class="m-friends_course" src="statics/courses/226-united-states.svg" alt="Curso de Inglês">
          </div>
        </q-card-section>
      </q-card>
    </div>
    <h2 class="m-friends_title">Meus amigos</h2>
    <q-card class="m-card" v-for="item in getFriends" v-bind:key="item.id" @click="viewFriend(item.id)">
      <q-card-section class="m-friends_card">
        <div class="m-friends_profile">
          <img class="m-friends_avatar" :src="`https://api.adorable.io/avatars/75/lis-avatar${item.id}.png`" :alt="`adorable avatar lis-avatar${item.id}.png`">
          <div>
            <h2 class="m-friends_username q-dark_title">{{item.name}}</h2>
            <p class="m-friends_level">Nível: {{item.level ? item.level : 1}}</p>
            <p class="m-friends_xp">{{item.xp}}XP</p>
          </div>
        </div>
        <div>
          <img class="m-friends_course" src="statics/courses/226-united-states.svg" alt="Curso de Inglês">
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'

export default {
  name: 'Hub',
  methods: {
    viewFriend (id) {
      this.$router.push(`/profile/${id}`)
    }
  },
  computed: {
    ...mapGetters('friends', ['getFriends'])
  },
  async mounted () {
    await store().dispatch('friends/getFriends')
  }
}
</script>
