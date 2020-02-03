<template>
  <div>
    <q-header class="o-header">
      <q-toolbar class="flex column">
        <div class="o-header_head">
          <q-toolbar-title class="a-text o-header_title">
            <q-icon name="arrow_back" v-if="title !== 'LIS'"/>
            {{ title }}
          </q-toolbar-title>
          <component :is="activeAction"></component>
        </div>
        <div class="o-header_menu" v-if="title === 'LIS'">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="o-header_menu-slide" v-for="(item, index) in routes" :key="index">
              <router-link class="o-header_menu-item" :class="[ routerActive === item.name ? '-active' : '' ]" :to="{ name: item.name }">{{ item.label }}</router-link>
            </swiper-slide>
          </swiper>
        </div>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import qprogress from './ui-header/progress'
import qfriends from './ui-header/friends'
import qstore from './ui-header/store'
import qsettings from './ui-header/settings'

export default {
  name: 'qheader',
  components: {
    swiper,
    swiperSlide,
    qprogress,
    qfriends,
    qstore,
    qsettings
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentum: false
      },
      routes: {
        home: { name: 'home', label: 'Atividades', action: 'progress' },
        store: { name: 'store', label: 'Loja', action: 'store' },
        profile: { name: 'profile', label: 'Perfil', action: 'settings' },
        hub: { name: 'hub', label: 'Hub de amigos', action: 'friends' }
      },
      default: { name: 'home', label: 'Atividades', action: 'progress' }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },

    routerActive () {
      return this.$route.name
    },

    activeAction () {
      return this.routes[this.$route.name].action ? `q${this.routes[this.$route.name].action}` : this.default.action
    },

    title () {
      if (this.routerActive === 'settings') return 'Configurações'
      else return 'LIS'
    }
  },
  methods: {
    toSlide (idx) {
      console.log(idx)
      this.swiper.slideTo(idx)
    }
  }
}
</script>
