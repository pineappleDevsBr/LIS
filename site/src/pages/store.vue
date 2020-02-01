<template>
  <div class="m-cards">
    <q-card class="m-card" v-for="item in products" v-bind:key="item.id">
      <q-card-section class="m-store_box-product">
        <div class="m-store_price">
          <strong>{{item.price}}</strong>
          <img class="m-store_coin" :src="`statics/store/coin.svg`" alt="">
        </div>
        <img class="m-store_icon" :src="`statics/store/products/${item.icon}`" alt="">
        <div class="m-store_product">
          <h2 class="m-store_title">{{item.name}}</h2>
          <q-icon name="contact_support" class="m-store_product-question">
            <q-popup-proxy :offset="[10, 10]">
              <q-banner class="m-store_product-info">
                <p>{{item.description}}</p>
              </q-banner>
            </q-popup-proxy>
          </q-icon>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Store',
  data () {
    return {
      products: [
        { id: 1, name: 'Vale-presente', price: 100, icon: 'buy.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' },
        { id: 2, name: 'Vale-presente', price: 100, icon: 'buy.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' },
        { id: 3, name: 'Vale-presente', price: 100, icon: 'buy.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' },
        { id: 4, name: 'Vale-presente', price: 100, icon: 'buy.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' },
        { id: 5, name: 'Vale-presente', price: 100, icon: 'buy.svg', description: 'Vale-presente: você pode comprar para presentear um amigo com um item surpresa 😁' }
      ]
    }
  }
}
</script>
