<template>
  <div>
    <q-card class="m-card">
      <q-card-section class="m-profile_info">
        <div>
          <q-skeleton type="QAvatar" class="m-skeleton_avatar -md -center" v-if="!getFriend.nickname"/>
          <img class="m-profile_avatar" :src="`https://api.adorable.io/avatars/75/${this.getFriend.avatar}`" alt="avatar adorable" v-else>
        </div>
        <div>
          <q-skeleton type="text" class="m-skeleton_title -high" v-if="!getFriend.nickname"/>
          <p class="m-profile_username" v-else>{{ getFriend.nickname }}</p>
        </div>
      </q-card-section>
      <q-card-section>
        <h2 class="m-friends_level-spotlight">{{$t('profileFriends.level')}} {{ setLevelUp.level }}</h2>
        <h3 class="m-friends_xp-spotlight">{{getFriend.xp}} XP</h3>
      </q-card-section>
      <q-card-section>
        <progressBar :progress="{ showValue: false, levelUp: this.setLevelUp.xp, xp: this.getFriend.xp }"/>
      </q-card-section>
    </q-card>
    <q-btn no-caps rounded class="m-search_btn q-mb-md" :label="$t('profileFriends.request')" @click="addFriend(getFriend.id)" v-if="!getFriend.areFriends"/>

    <div v-if="friends.length > 0">
      <h2 class="m-friends_title">{{$t('profileFriends.friends')}}</h2>
      <q-card class="m-card" v-for="item in friends" v-bind:key="item.id">
        <q-card-section class="m-friends_card">
          <div class="m-friends_profile">
            <img class="m-friends_avatar" :src="`https://api.adorable.io/avatars/75/${item.avatar}`" alt="adorable">
            <div>
              <h2 class="m-friends_username">{{item.name}}</h2>
              <p class="m-friends_level">{{$t('profileFriends.level')}}: {{item.level}}</p>
              <p class="m-friends_xp">{{item.xp}}XP</p>
            </div>
          </div>
          <div>
            <img class="m-friends_course" :src="`statics/nationa/${item.course.flag}`" alt="">
          </div>
        </q-card-section>
      </q-card>
    </div>
    <btnBack @back="back"/>
  </div>
</template>

<script>
import progressBar from '../../components/ui/progress-bar'
import btnBack from '../../components/ui/btnBack'
import store from '../../store'
import { mapGetters } from 'vuex'

export default {
  name: 'friend',
  components: {
    progressBar,
    btnBack
  },
  data () {
    return {
      friends: [],
      progress: {
        showValue: false,
        levelUp: 2000,
        xp: 1560
      }
    }
  },
  methods: {
    async addFriend (id) {
      const payload = { friend_id: id }

      const response = await store().dispatch('friends/sendInvites', payload)
      if (response.status) {
        this.$q.notify({
          color: 'positive',
          message: this.$t('profileFriends.requestSuccessfully'),
          icon: 'sentiment_satisfied_alt'
        })
      } else {
        this.$q.notify({
          color: 'negative',
          message: this.$t('profileFriends.error'),
          icon: 'report_problem'
        })
      }
    },
    back () {
      this.$router.push({ name: 'hub' })
    }
  },
  computed: {
    ...mapGetters('friends', ['getFriend']),
    setLevelUp () {
      return this.getFriend.level
    }
  },
  async mounted () {
    await store().dispatch('friends/getFriend', this.$route.params.id)
  }
}
</script>
