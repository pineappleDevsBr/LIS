<template>
  <q-dialog v-model="buy" persistent>
    <q-card class="m-card m-buy">
      <q-card-section class="m-buy_cash">
        Preço: {{ buyProduct.price }}
        <img class="m-buy_cash-icon" :src="`statics/store/coin.svg`" alt="">
      </q-card-section>
      <q-card-section class="m-buy_product">
        <h2 class="m-buy_product-name">{{ buyProduct.name }}</h2>
        <img class="m-buy_product_icon" :src="`statics/store/products/${buyProduct.icon}.svg`" alt="">
        <p class="m-buy_product_description"><strong>{{buyProduct.name}}: </strong>{{buyProduct.description}}</p>
      </q-card-section>
      <q-card-actions class="m-buy_add">
        <span><strong>Quantidade:</strong> {{qtde}}</span>
        <div>
          <q-btn class="m-buy_add-btn" push round dense icon="remove" @click="remove" />
          <q-btn class="m-buy_add-btn" push round dense icon="add" @click="add" />
        </div>
      </q-card-actions>

      <q-card-section class="m-buy_value">
        Valor total: {{value}}
      </q-card-section>
      <q-separator />

      <q-card-actions align="right">
        <q-btn @click="close" flat class="a-btn_actions" label="Cancelar" />
        <q-btn @click="finishBuy" flat class="a-btn_actions" label="Comprar" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store'

export default {
  name: 'buy',
  props: {
    buy: Boolean,
    product: Object
  },
  data () {
    return {
      qtde: 1,
      buyProduct: {}
    }
  },
  methods: {
    remove () {
      if (this.qtde > 1) {
        this.qtde -= 1
      }
    },
    add () {
      if ((this.value + this.buyProduct.price) <= this.getUser.money) {
        this.qtde += 1
      }
    },
    async finishBuy () {
      this.$q.loading.show()
      const payload = {
        id: this.buyProduct.id,
        quantify: this.qtde
      }
      const sucess = await store().dispatch('store/buyItem', payload)
      if (sucess) {
        await store().dispatch('user/getUser')
        this.$q.notify({
          color: 'accent',
          message: 'Compra realizada com sucesso!',
          icon: 'shop'
        })
        this.$emit('close')
      } else {
        this.$q.notify({
          color: 'negative',
          message: 'Houve um erro ao processar sua compra. Tente novamente ou entre em contato com o suporte tecnico.',
          icon: 'error'
        })
      }
      this.qtde = 1
      this.$q.loading.hide()
    },
    close () {
      this.$emit('close')
      this.qtde = 1
    }
  },
  watch: {
    product (value) {
      this.buyProduct = value
    }
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    value () {
      return this.qtde * this.buyProduct.price
    }
  }
}
</script>
