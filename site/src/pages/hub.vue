<template>
  <div>
    <q-card class="m-card" v-for="item in friends" v-bind:key="item.id">
      <q-card-section class="m-hub_card">
        <div class="m-hub_profile">
          <img class="m-hub_avatar" :src="`https://api.adorable.io/avatars/75/${item.avatar}`" alt="">
          <div>
            <h2 class="m-hub_username">{{item.name}}</h2>
            <p class="m-hub_level">Nível: {{item.level}}</p>
            <p class="m-hub_xp">{{item.xp}}XP</p>
          </div>
        </div>
        <div>
          <img class="m-hub_course" :src="`statics/courses/${item.course.flag}`" alt="">
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
        { id: 1, name: 'Amigo2', avatar: 'lis-avatar3.png', level: '1', xp: '300', course: { name: 'Inglês', flag: '226-united-states.svg' } },
        { id: 1, name: 'Amigo3', avatar: 'lis-avatar4.png', level: '3', xp: '306', course: { name: 'Inglês', flag: '226-united-states.svg' } },
        { id: 1, name: 'Amigo4', avatar: 'lis-avatar5.png', level: '10', xp: '120', course: { name: 'Inglês', flag: '226-united-states.svg' } }
      ]
    }
  }
}
</script>
