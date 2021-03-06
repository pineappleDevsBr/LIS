<template>
  <div>
    <div class="m-spotlight m-friends_spotlight">
      <img class="m-spotlight_icon" src="statics/hub/bracelet.svg" alt="Friends">
      {{ $t('hub.title') }}
      <div class="m-friends_search">
        <q-btn class="m-friends_search-btn" no-caps flat :label="$t('hub.search.title')" @click="searchOpen"/>
        <q-btn class="m-friends_search-btn" no-caps flat :label="$t('hub.invitation')" @click="invitation"/>
      </div>
    </div>
    <div v-if="getInvites.length > 0">
      <h2 class="m-friends_title">{{ $t('hub.requests') }}</h2>
      <div v-if="!getInvites">
        <q-card class="m-skeleton" v-for="index in 2" v-bind:key="index">
          <q-card-section class="m-friends_card">
            <div class="m-friends_profile">
              <q-skeleton type="QAvatar" class="m-skeleton_avatar" />
              <div>
                <q-skeleton type="text" class="m-skeleton_title" />
                <q-skeleton type="text" class="m-skeleton_subtitle" />
                <q-skeleton type="text" class="m-skeleton_subtitle" />
              </div>
            </div>
            <div class="m-friends_confirm">
              <q-skeleton type="circle" class="m-skeleton_btn-round"/>
              <q-skeleton type="circle" class="m-skeleton_btn-round"/>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div v-else>
        <q-card class="m-card" v-for="item in getInvites" v-bind:key="item.id">
          <q-card-section class="m-friends_card">
            <div class="m-friends_profile">
              <img class="m-friends_avatar" :src="`https://api.adorable.io/avatars/75/${item.avatar}`" :alt="`adorable avatar`">
              <div>
                <h2 class="m-friends_username q-dark_title">{{item.name}}</h2>
                <p class="m-friends_level">{{$t('hub.level')}}: {{item.level.level ? item.level.level : 1}}</p>
                <p class="m-friends_xp">{{item.xp}}XP</p>
              </div>
            </div>
            <div>
              <div class="m-friends_confirm">
                <q-btn round color="accent" icon="done" class="m-friends_confirm-btn" @click="acceptFriendship(item.invite_id, true, item.name)"/>
                <q-btn round color="negative" icon="close" class="m-friends_confirm-btn" @click="acceptFriendship(item.invite_id, false, item.name)"/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <h2 class="m-friends_title">{{ $t('hub.myFriends') }}</h2>
    <div v-if="!getFriends">
      <q-card class="m-skeleton" v-for="index in 2" v-bind:key="index">
        <q-card-section class="m-friends_card">
          <div class="m-friends_profile">
            <q-skeleton type="QAvatar" class="m-skeleton_avatar" />
            <div>
              <q-skeleton type="text" class="m-skeleton_title" />
              <q-skeleton type="text" class="m-skeleton_subtitle" />
              <q-skeleton type="text" class="m-skeleton_subtitle" />
            </div>
          </div>
          <div>
            <q-skeleton class="m-skeleton_flag" />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div v-else>
      <q-card class="m-card" v-for="item in getFriends" v-bind:key="item.id" @click="viewFriend(item.id)">
        <q-card-section class="m-friends_card">
          <div class="m-friends_profile">
            <img class="m-friends_avatar" :src="`https://api.adorable.io/avatars/75/${item.avatar}`" :alt="`adorable avatar`">
            <div>
              <h2 class="m-friends_username q-dark_title">{{item.name}}</h2>
              <p class="m-friends_level">{{$t('hub.level')}}: {{item.level.level ? item.level.level : 1}}</p>
              <p class="m-friends_xp">{{item.xp}}XP</p>
            </div>
          </div>
          <div>
            <img class="m-friends_nationality" :src="`statics/nationalities/${item.nationality_id}.svg`" alt="Nacionalidade">
          </div>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="inviteOpen" position="bottom">
      <q-card>
        <q-card-section class="m-friend_invite">
          <h3 class="m-friends_title">{{$t('hub.invite.title')}}</h3>
          <p class="a-text">{{$t('hub.invite.text')}}</p>
          <p class="a-text">{{$t('hub.invite.obs')}}</p>
          <div class="flex">
            <q-tooltip
            v-model="alertCopy"
            anchor="top middle"
            self="bottom middle"
            :offset="[10, 10]"
            content-class="bg-primary"
            content-style="font-size: 14px">
              {{$t('hub.invite.alert')}}
            </q-tooltip>
          </div>
          <q-btn no-caps flat rounded class="m-friends_invite-copy" @click="copy(`${baseURL}/#/profile/${getUser.id}`)">
            <strong>{{$t('hub.invite.invitation')}}:&nbsp;</strong> <span class="-link">{{ `${baseURL}/#/profile/${getUser.id}` }}</span>
          </q-btn>
          <img class="m-friends_invite-ilustra" src="statics/hub/invite.png" alt="Invite ilustra">
        </q-card-section>
      </q-card>
    </q-dialog>
    <searchFriend :search="search" :list="searchAll" @closeSearch="closeSearch"/>
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
      page: 1,
      baseURL: 'http://18.217.115.80',
      alertCopy: false,
      search: false,
      inviteOpen: false
    }
  },
  methods: {
    viewFriend (id) {
      this.$router.push(`/profile/${id}`)
    },

    async acceptFriendship (inviteId, selection, name) {
      const payload = { invite_id: inviteId, selection }
      const response = await store().dispatch('friends/acceptInvites', payload)
      await store().dispatch('friends/getFriends')
      if (response.status === 'confirmed') {
        this.$q.notify({
          color: 'positive',
          message: `${this.$t('hub.invite.notify.confirmed1')} ${name} ${this.$t('hub.invite.notify.confirmed2')}`,
          icon: 'sentiment_satisfied_alt'
        })
      } else if (response.status === 'pending') {
        this.$q.notify({
          color: 'amber-8',
          message: `${name} ${this.$t('hub.invite.notify.pending')}`,
          icon: 'sentiment_dissatisfied'
        })
      } else {
        this.$q.notify({
          color: 'negative',
          message: `Ocorreu algum erro ao ${selection ? 'aceitar' : 'recusar'} a amizade!`,
          icon: 'report_problem'
        })
      }
    },

    invitation () {
      this.inviteOpen = true
    },

    copy (call) {
      this.alertCopy = true
      const texto = call
      let inputTest = document.createElement('input')

      inputTest.value = texto
      document.body.appendChild(inputTest)
      inputTest.select()
      document.execCommand('copy')
      document.body.removeChild(inputTest)

      setTimeout(() => {
        this.alertCopy = false
      }, 1500)

      setTimeout(() => {
        this.inviteOpen = false
      }, 2000)
    },

    async searchOpen () {
      await store().dispatch('friends/cleanList')
      await store().dispatch('friends/searchAll', this.page)
      this.search = true
    },

    async closeSearch () {
      this.search = false
    }
  },
  computed: {
    ...mapGetters('friends', ['getFriends']),
    ...mapGetters('friends', ['getInvites']),
    ...mapGetters('friends', ['searchAll']),
    ...mapGetters('user', ['getUser'])
  },
  async mounted () {
    await store().dispatch('friends/getFriends')
    await store().dispatch('user/getUser')
  }
}
</script>
