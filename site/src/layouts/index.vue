<template>
  <div class="bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
    <q-layout view="lHh Lpr lFf"  class="v-hld_mobile bg-white" :class="{ 'q-dark': $q.dark.isActive }">
      <qheader></qheader>
        <q-page-container>
          <div class="v-container">
            <transition name="slideUp" mode="out-in">
              <router-view />
            </transition>
          </div>
        </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import qheader from '../components/header'

export default {
  name: 'MyLayout',
  components: { qheader }
}
</script>

<style>

  .slideUp-enter-active,
  .slideUp-leave-active {
    transition: opacity .3s, transform .3s;
  }

  .slideUp-enter,
  .slideUp-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }

</style>
