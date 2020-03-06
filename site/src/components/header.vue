<template>
  <div>
    <q-header class="bg-primary o-header v-hld_mobile" :class="{ 'q-dark': $q.dark.isActive }">
      <q-toolbar class="flex column">
        <div class="o-header_head">
          <q-toolbar-title class="a-text -white o-header_title">
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
      <div class="o-header_border">
        <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" width="234" height="232" viewBox="0 0 234 232">
          <path class="fill" d="M559.5,463.5h-234v232C328.08,689.9,339.5,499.5,559.5,463.5Z" transform="translate(-325.5 -463.5)"/>
        </svg>
      </div>
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
      title: 'LIS',
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentum: false
      },
      routes: {
        home: { name: 'home', label: 'Atividades', action: 'qprogress' },
        store: { name: 'store', label: 'Loja', action: 'qstore' },
        profile: { name: 'profile', label: 'Perfil', action: 'qsettings' },
        hub: { name: 'hub', label: 'Hub de amigos', action: 'qfriends' },
        settings: { name: 'settings', label: 'Ajustes gerais', action: '' }
      },
      default: { name: 'home', label: 'Atividades', action: '' }
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
      if (this.routes[this.$route.name] && this.routes[this.$route.name].action) {
        return this.routes[this.$route.name].action
      }

      return this.default.action
    }
  },
  methods: {
    toSlide (idx) {
      this.swiper.slideTo(idx)
    }
  }
}
</script>
