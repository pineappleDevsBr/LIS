<template>
  <div>
    <div class="m-spotlight">
      <img class="m-spotlight_icon" src="statics/hub/bracelet.svg" alt="Friends">
      Descubra novos amigos! Aprender junto é mais divertido!
    </div>
    <q-card class="m-card" v-for="item in friends" v-bind:key="item.id" @click="viewFriend(item.id)">
      <q-card-section class="m-friends_card">
        <div class="m-friends_profile">
          <img class="m-friends_avatar" :src="`https://api.adorable.io/avatars/75/${item.avatar}`" alt="">
          <div>
            <h2 class="m-friends_username q-dark_title">{{item.name}}</h2>
            <p class="m-friends_level">Nível: {{item.level}}</p>
            <p class="m-friends_xp">{{item.xp}}XP</p>
          </div>
        </div>
        <div>
          <img class="m-friends_course" :src="`statics/courses/${item.course.flag}`" alt="">
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
      friends: [
        { id: 1, name: 'Amigo1', avatar: 'lis-avatar2.png', level: '5', xp: '856', course: { name: 'Inglês', flag: '226-united-states.svg' } },
        { id: 2, name: 'Amigo2', avatar: 'lis-avatar3.png', level: '1', xp: '300', course: { name: 'Inglês', flag: '226-united-states.svg' } },
        { id: 3, name: 'Amigo3', avatar: 'lis-avatar4.png', level: '3', xp: '306', course: { name: 'Inglês', flag: '226-united-states.svg' } },
        { id: 4, name: 'Amigo4', avatar: 'lis-avatar5.png', level: '10', xp: '120', course: { name: 'Inglês', flag: '226-united-states.svg' } }
      ]
    }
  },
  methods: {
    viewFriend (id) {
      this.$router.push(`/profile/${id}`)
    }
  }
}
</script>
