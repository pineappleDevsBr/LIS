<template>
  <div>
    <q-header class="bg-primary o-header v-hld_mobile" :class="{ 'q-dark': $q.dark.isActive }">
      <q-toolbar class="flex column">
        <div class="o-header_head">
          <q-toolbar-title class="a-text -white o-header_title q-dark_title">
            {{ title }}
          </q-toolbar-title>
          <qprogress></qprogress>
          <!-- <component :is="activeAction"></component> -->
        </div>
        <div class="o-header_menu" v-if="title === 'LIS'">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="o-header_menu-slide" v-for="(item, index) in routes" :key="index">
              <router-link class="o-header_menu-item" :class="[ routerActive === item.name ? '-active' : '' ]" :to="{ name: item.name }">{{ item.label }}</router-link>
            </swiper-slide>
          </swiper>
          <!-- <q-tabs
            v-model="active"
            dense
            no-caps
            inline-label
            indicator-color="transparent"
            active-color="white"
            class="text-grey-2"
            >
            <q-route-tab class="q-pa-sm" name="home" to="/" :label="$i18n.t('header.home')" />
            <q-route-tab class="q-pa-sm" name="store" to="/store" :label="$i18n.t('header.store')" />
            <q-route-tab class="q-pa-sm" name="profile" to="/profile" :label="$i18n.t('header.profile')" />
            <q-route-tab class="q-pa-sm" name="hub" to="/hub" :label="$i18n.t('header.hub')" />
            <q-route-tab class="q-pa-sm" name="settings" to="/settings" :label="$i18n.t('header.settings')" />
          </q-tabs> -->
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
import qprogress from './ui-header/progress'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import qfriends from './ui-header/friends'
// import qstore from './ui-header/store'
// import qsettings from './ui-header/settings'

export default {
  name: 'qheader',
  components: {
    swiper,
    swiperSlide,
    qprogress
    // qfriends,
    // qstore,
    // qsettings
  },
  data () {
    return {
      title: 'LIS',
      active: 'home',
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentum: false
      },
      routes: {
        home: { name: 'home', label: this.$i18n.t('header.home'), action: 'qprogress' },
        store: { name: 'store', label: this.$i18n.t('header.store'), action: 'qprogress' },
        profile: { name: 'profile', label: this.$i18n.t('header.profile'), action: 'qprogress' },
        hub: { name: 'hub', label: this.$i18n.t('header.hub'), action: 'qprogress' },
        settings: { name: 'settings', label: this.$i18n.t('header.settings'), action: 'qprogress' }
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
