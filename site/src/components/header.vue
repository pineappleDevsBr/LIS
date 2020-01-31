<template>
  <div>
    <q-header>
      <q-toolbar class="flex column">
        <q-toolbar-title>
          Lis
        </q-toolbar-title>
        <q-tabs
        inline-label
        shrink
        :v-model="tab"
        narrow-indicator
        class="bg-primary text-white">
          <q-tab style="margin-left: 80px;" name="activities" label="Atividades" />
          <q-tab name="store" label="Loja" />
          <q-tab name="profile" label="Perfil" />
          <q-tab name="hub" label="Hub de amigos" />
        </q-tabs>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  name: 'qheader',
  data () {
    return {
      tab: 'activities'
    }
  }
}
</script>
