<template>
  <div class="o-profile">
    <div class="m-profile_info">
      <img class="m-profile_avatar" :src="`https://api.adorable.io/avatars/75/lis-avatar${getUser.id}.png`" alt="avatar adorable">
      <p class="m-profile_username">{{ getUser.nickname }}</p>
    </div>
    <div class="m-profile_achievements" v-if="products.length > 0">
      <h2 class="m-profile_achievements-title">Meus itens</h2>
      <div class="m-cards">
        <q-card class="m-card" v-for="item in products" v-bind:key="item.id">
          <q-card-section class="m-store_box-product">
            <div class="m-store_price">
              <strong>{{item.qtde}}</strong>x
            </div>
            <img class="m-store_icon" :src="`statics/store/products/${item.icon}`" alt="">
            <div class="m-store_product">
              <h2 class="m-store_title">{{item.name}}</h2>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="m-profile_achievements" v-if="achievements.length > 0">
      <h2 class="m-profile_achievements-title">Conquistas</h2>

      <q-card class="m-card" v-for="item in achievements" v-bind:key="item.id">
        <q-card-section class="m-profile_card">
          <img class="m-profile_icon" :src="`statics/profile/achievements/${item.icon}`" alt="">
          <div>
            <h2 class="m-profile_title">{{item.title}}</h2>
            <p class="m-profile_description">{{item.description}}</p>
          </div>
        </q-card-section>
        <q-card-section>
          <progressBar :progress="item.progress"></progressBar>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import progressBar from '../../components/progress-bar'
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: {
    progressBar
  },
  data () {
    return {
      achievements: [
        { id: 1, title: 'Resistencia', description: 'Faça 10 dias consecutivos de atividades', icon: 'shield.svg', progress: { showValue: true, levelUp: 10, xp: 10 } },
        { id: 2, title: 'Modo NERD', description: 'Leia 20 textos do nível 3', icon: 'book.svg', progress: { showValue: true, levelUp: 20, xp: 14 } }
      ],
      products: [
        { id: 1, name: 'Vale-presente', qtde: 1, icon: 'gift-card.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' },
        { id: 2, name: 'Vale-presente', qtde: 5, icon: 'gift-card.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' }
      ]
    }
  },
  computed: {
    ...mapGetters('user', ['getUser'])
  }
}
</script>
