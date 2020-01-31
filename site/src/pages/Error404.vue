<template>
  <div class="o-error404">
    <div class="o-error404_content">
      <p class="o-error404_title"><strong>404</strong></p>
      <p class="a-text">
        Ops! parece que seus estudos
        tiveram um pequeno desvio, vamos
        voltar à tela inicial para você
        continuar de onde parou.
      </p>

    <q-btn rounded outline color="primary" class="bg-white full-width q-mt-md" size="lg" label="Voltar"  :to="{name: 'home'}" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
