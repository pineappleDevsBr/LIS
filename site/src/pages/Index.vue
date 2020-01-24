<template>
  <q-page class="bg-primary q-pa-md flex column">
    <h1 class="text-white text-h4 text-center q-mt-xl o-home_title">LIS <br/>Learning is simple</h1>
    <div class="text-white">
      LIS é um aplicativo aonde você
      pode aprender outro idioma de
      forma intuitiva e simples e se
      divertindo.
    </div>
    <div class="text-white">
      Você pode estudar através de:
      <ul>
        <li>Quizzes</li>
        <li>Videos</li>
        <li>Textos</li>
      </ul>
    </div>
    <q-btn outline color="white" size="lg" label="Login"  to="/login" />
    <q-btn outline color="white" size="lg" label="Cadastrar-se" class="q-mt-md" />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
