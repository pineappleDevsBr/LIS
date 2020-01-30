<template>
  <div class="o-error404">
    <img class="o-error404_ilustra" src="~assets/404/bg-404.png" alt="">
    <div class="o-error404_content">
      <p class="o-error404_title"><strong>404</strong></p>
      <p class="a-txt">
        Ops! parece que seus estudos
        tiveram um pequeno desvio, vamos
        voltar à tela inicial para você
        continuar de onde parou.
      </p>

    <q-btn rounded outline color="primary" class="bg-white full-width q-mt-md" size="lg" label="Voltar"  to="/" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
