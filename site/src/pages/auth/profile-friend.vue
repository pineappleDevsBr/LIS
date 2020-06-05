<template>
  <div>
    <q-card class="m-card">
      <q-card-section>
        <h2 class="m-friends_level-spotlight">Nível 10</h2>
        <h3 class="m-friends_xp-spotlight">1.560 XP</h3>
      </q-card-section>
      <q-card-section>
        <progressBar :progress="progress"></progressBar>
      </q-card-section>
    </q-card>

    <h2 class="m-friends_title">Cursos</h2>
    <div>
      <q-card class="m-card" v-for="item in courses" v-bind:key="item.id">
        <q-card-section class="m-friends_card-course">
          <div>
            <img class="m-friends_course-flag" :src="`statics/courses/${item.flag}`" alt="">
          </div>
          <div>
            <h2 class="m-friends_username">{{item.name}}</h2>
            <p class="m-friends_xp">{{item.xp}}XP</p>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <h2 class="m-friends_title">Amigos</h2>
    <div>
      <q-card class="m-card" v-for="item in friends" v-bind:key="item.id">
        <q-card-section class="m-friends_card">
          <div class="m-friends_profile">
            <img class="m-friends_avatar" :src="`https://api.adorable.io/avatars/75/${item.avatar}`" alt="">
            <div>
              <h2 class="m-friends_username">{{item.name}}</h2>
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
    <btnBack @back="back"/>
  </div>
</template>

<script>
import progressBar from '../../components/ui/progress-bar'
import btnBack from '../../components/ui/btnBack'

export default {
  name: 'friend',
  components: {
    progressBar,
    btnBack
  },
  data () {
    return {
      progress: {
        showValue: false,
        levelUp: 2000,
        xp: 1560
      },
      friends: [
        { id: 1, name: 'Amigo1', avatar: 'lis-avatar2.png', level: '5', xp: '856', course: { name: 'Inglês', flag: '226-united-states.svg' } },
        { id: 2, name: 'Amigo2', avatar: 'lis-avatar3.png', level: '1', xp: '300', course: { name: 'Inglês', flag: '226-united-states.svg' } },
        { id: 3, name: 'Amigo3', avatar: 'lis-avatar4.png', level: '3', xp: '306', course: { name: 'Inglês', flag: '226-united-states.svg' } },
        { id: 4, name: 'Amigo4', avatar: 'lis-avatar5.png', level: '10', xp: '120', course: { name: 'Inglês', flag: '226-united-states.svg' } }
      ],
      courses: [
        { id: 1, name: 'Inglês', xp: 360, flag: '226-united-states.svg' }
      ]
    }
  }
}
</script>
