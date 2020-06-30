<template>
  <div class="m-store">
    <div class="m-store_money">
      <span id="countStore">{{getUser.money}}</span>
      <img class="m-store_coin" src="statics/store/coin.svg" alt="">
    </div>
    <div class="m-spotlight">
      <img class="m-spotlight_icon" src="statics/store/online-store.svg" alt="Store">
      {{ $t('store.title') }}
    </div>
    <div class="m-store_group" v-if="getMyItems">
      <h2 class="m-store_title">{{ $t('store.myItems.title') }}</h2>
      <div class="m-cards">
        <q-card class="m-card" v-for="item in getMyItems" v-bind:key="item.item.id" @click="useProduct(item.item.id, item.item.item_id, item.item.status)">
          <q-card-section class="m-store_box-product">
            <q-badge floating color="primary" text-color="white" :label="`${item.qtde}x`" />
            <div class="m-store_price">
              <strong>{{ item.item.status === 'inactivated' ? $t('store.myItems.use') : $t('store.myItems.inUse')}}</strong>
            </div>
            <img class="m-store_icon" :src="`statics/store/products/${item.item.item.icon}.svg`" alt="">
            <div class="m-store_product">
              <h2 class="m-store_subtitle">{{item.item.item.name}}</h2>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <h2 class="m-store_title">{{ $t('store.availableItems') }}</h2>
    <div class="m-cards" v-if="!getItems">
      <q-card class="m-card m-skeleton -center" v-for="index in 3" v-bind:key="`skl_${index}`">
        <q-card-section class="q-pa-xs">
          <q-skeleton type="text" class="m-skeleton_price" />
        </q-card-section>
        <q-card-section class="q-pa-xs">
          <q-skeleton type="QAvatar" class="m-skeleton_avatar -center" />
        </q-card-section>
        <q-card-section class="q-pa-xs">
          <q-skeleton type="text" class="m-skeleton_title -sm -center" />
        </q-card-section>
      </q-card>
    </div>
    <div class="m-cards" v-else>
      <q-card class="m-card" v-for="item in getItems" v-bind:key="item.id" @click="buyProduct(item.id)">
        <q-card-section class="m-store_box-product">
          <div class="m-store_price">
            <strong>{{item.price}}</strong>
            <img class="m-store_coin" src="statics/store/coin.svg" :alt="item.name">
          </div>
          <img class="m-store_icon" :src="`statics/store/products/${item.icon}.svg`" :alt="item.name">
          <div class="m-store_product">
            <h2 class="m-store_subtitle">{{item.name}}</h2>
          </div>
        </q-card-section>
      </q-card>
      <buy :buy="buyConfirm" :product="getItems[productId]" @close="closeBuyConfirm"></buy>
    </div>
    <q-dialog v-model="selectFriend" position="bottom">
      <div class="m-store_present-list">
        <q-card class="m-card" v-for="item in getFriends" v-bind:key="item.id" @click="usePresent(itemSelect, item.id)">
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
    </q-dialog>
    <confirmUse
      :persistent="confirmUse.presistent"
      :title="confirmUse.title"
      :isOpen="confirmUse.open"
      @close="activeProduct"
    />
  </div>
</template>

<script>
import buy from '../../components/buy-product'
import confirmUse from '../../components/ui/dlg-confirm'
import store from '../../store'
import { mapGetters } from 'vuex'
import { CountUp } from 'countup.js'

export default {
  name: 'Store',
  components: {
    buy,
    confirmUse
  },
  data () {
    return {
      evt: null,
      buyConfirm: false,
      productId: 0,
      currentMoney: 0,
      selectFriend: false,
      friend: null,
      itemSelect: null,
      useConfirm: false,
      confirmUse: {
        open: false,
        persistent: true,
        title: this.$t('store.confirmUseItem')
      }
    }
  },
  methods: {
    buyProduct (id) {
      if (this.getUser.money >= this.getItems[id - 1].price) {
        this.productId = id - 1
        this.buyConfirm = true
        this.currentMoney = this.getUser.money
      } else {
        this.$q.notify({
          color: 'negative',
          message: this.$t('store.insufficientCurrencies'),
          icon: 'monetization_on'
        })
      }
    },
    async useProduct (id, type, status) {
      if (status === 'inactivated') {
        this.itemSelect = id
        if (type === 3) {
          this.selectFriend = true
        } else {
          if (!this.$q.cookies.get('lis_confirmUseItems')) {
            this.confirmUse.open = true
          } else {
            this.activeProduct(this.itemSelect)
          }
        }
      }
    },
    async activeProduct (evt) {
      if (evt) {
        const payload = { id: this.itemSelect }
        const response = await store().dispatch('store/useItem', payload)
        if (response) {
          await store().dispatch('store/getMyItems')
          this.$q.notify({
            color: 'positive',
            message: this.$t('store.activatedItem'),
            icon: 'done'
          })
        } else {
          this.$q.notify({
            color: 'negative',
            message: this.$t('store.errorActivating'),
            icon: 'report_problem'
          })
        }
      }
      this.confirmUse.open = false
    },
    async usePresent (item, friend) {
      const payload = { id: item, friend }
      const response = await store().dispatch('store/useItem', payload)
      if (response) {
        await store().dispatch('store/getMyItems')
        this.selectFriend = false
        this.$q.notify({
          color: 'positive',
          message: this.$t('store.gift'),
          icon: 'card_giftcard'
        })
      } else {
        this.$q.notify({
          color: 'negative',
          message: this.$t('store.errorActivating'),
          icon: 'report_problem'
        })
      }
    },
    async closeBuyConfirm () {
      const options = { startVal: this.currentMoney }
      let demo = new CountUp('countStore', this.getUser.money, options)
      if (!demo.error) {
        demo.start()
      } else {
        console.error(demo.error)
      }

      await store().dispatch('store/getMyItems')
      this.buyConfirm = false
    }
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    ...mapGetters('store', ['getItems']),
    ...mapGetters('store', ['getMyItems']),
    ...mapGetters('friends', ['getFriends'])
  },
  async mounted () {
    await store().dispatch('store/getItems')
    await store().dispatch('store/getMyItems')
    await store().dispatch('friends/getFriends')
  }
}
</script>
