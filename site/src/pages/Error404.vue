<template>
  <div class="bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
    <div class="o-error404 v-hld_mobile" :class="{ 'q-dark': $q.dark.isActive }">
      <p class="o-error404_title"><strong>404</strong></p>
      <p class="a-text -white">
        {{ $t('errorFilter.page404') }}
      </p>
      <q-btn rounded outline color="primary" class="bg-white full-width q-mt-md" size="lg" :label="$t('errorFilter.page404Btn')"  :to="{name: 'home'}" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
