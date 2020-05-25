<template>
  <div>
    <div class="m-spotlight m-friends_spotlight">
      <img class="m-spotlight_icon" src="statics/hub/bracelet.svg" alt="Friends">
      {{ $t('hub.title') }}
      <div class="m-friends_search">
        <q-btn class="m-friends_search-btn" no-caps flat :label="$t('hub.search')" @click="searchOpen"/>
        <q-btn class="m-friends_search-btn" no-caps flat :label="$t('hub.invitation')" @click="invitation"/>
      </div>
    </div>
    <div>
      <h2 class="m-friends_title">{{ $t('hub.requests') }}</h2>
      <q-card class="m-card" v-for="item in getFriends" v-bind:key="item.id">
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
            <div class="m-friends_confirm">
              <q-btn round color="accent" icon="done" class="m-friends_confirm-btn" @click="acceptFriendship(item.id)"/>
              <q-btn round color="negative" icon="close" class="m-friends_confirm-btn" @click="refuseFriendship(item.id)"/>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <h2 class="m-friends_title">{{ $t('hub.myFriends') }}</h2>
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
    <q-dialog v-model="inviteOpen" position="bottom">
      <q-card>
        <q-card-section class="m-friend_invite">
          <h3 class="m-friends_title">Convide seus amigos que já tenham uma conta!</h3>
          <q-btn no-caps flat rounded class="m-friends_invite-copy" @click="inviteOpen = false">
            <strong>Convite:&nbsp;</strong> <span class="-link">{{ invite }}</span>
          </q-btn>
          <img class="m-friends_invite-ilustra" src="statics/hub/invite.png" alt="Invite ilustra">
        </q-card-section>
      </q-card>
    </q-dialog>
    <searchFriend :search="search" @closeSearch="closeSearch"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../store'
import searchFriend from '../../components/searchFriend'

export default {
  name: 'Hub',

  components: {
    searchFriend
  },

  data () {
    return {
      search: false,
      inviteOpen: false,
      invite: 'https://lis.com.br/invite/CH3BBC556GFccF'
    }
  },
  methods: {
    viewFriend (id) {
      this.$router.push(`/profile/${id}`)
    },

    invitation () {
      this.inviteOpen = true
    },

    searchOpen () {
      this.search = true
    },

    closeSearch () {
      this.search = false
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
