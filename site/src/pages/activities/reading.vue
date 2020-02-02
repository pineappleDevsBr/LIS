<template>
  <div class="o-reading">
    <div class="m-reading_translated">
      Tradução
      <q-toggle v-model="translated" color="primary"/>
    </div>
    <q-card class="m-card">
      <q-card-section v-if="!translated">
        <h2 class="m-reading_title">{{content.title.original}}</h2>
        <q-scroll-area class="m-reading_scroll">
        <div class="m-reading_text">
          {{content.text.original}}
        </div>
        </q-scroll-area>
      </q-card-section>
      <q-card-section v-else>
        <h2 class="m-reading_title">{{content.title.translated}}</h2>
        <q-scroll-area class="m-reading_scroll">
        <div class="m-reading_text">
          {{content.text.translated}}
        </div>
        </q-scroll-area>
      </q-card-section>
    </q-card>
    <q-btn no-caps rounded class="m-reading_btn" label="Ler outro texto"/>
  </div>
</template>

<script>
export default {
  name: 'Reading',
  data () {
    return {
      translated: false,
      content: {
        title: {
          original: 'Harry Potter',
          translated: 'Harry Potter'
        },
        text: {
          original: `Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people). Since the release of the first novel, Harry Potter and the Philosopher's Stone, on 26 June 1997, the books have found immense popularity, critical acclaim and commercial success worldwide. They have attracted a wide adult audience as well as younger readers and are often considered cornerstones of modern young adult literature.[2] As of February 2018, the books have sold more than 500 million copies worldwide, making them the best-selling book series in history, and have been translated into eighty languages.[3] The last four books consecutively set records as the fastest-selling books in history, with the final instalment selling roughly eleven million copies in the United States within twenty-four hours of its release.`,
          translated: `Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts. O arco de história principal diz respeito às amizades de Harry com outros bruxos de sua idade, como Ronald Weasley e Hermione Granger, e também com o diretor de Hogwarts Alvo Dumbledore, considerado o maior dos magos, e seus conflitos com o bruxo das trevas Lord Voldemort, que pretende se tornar imortal, conquistar o mundo dos bruxos, subjugar as pessoas não-mágicas e destruir todos aqueles que estão em seu caminho, especialmente Harry Potter, a quem ele considera seu maior rival. Desde o lançamento do primeiro romance, Harry Potter e a Pedra Filosofal, em 26 de junho de 1997, os livros ganharam uma imensa popularidade, aclamação da crítica e foram um sucesso comercial em todo o mundo.[1] A série também recebeu algumas críticas, incluindo a preocupação com o tom cada vez mais sombrio conforme a história progredia. Até maio de 2015, já haviam sido vendidas 450 milhões de cópias em todo o mundo, tornando a série a best-seller da história, sendo traduzida para 73 idiomas.[2][3] Os últimos quatro livros consecutivamente foram considerados os mais vendidos da história, sendo que o último livro vendeu cerca de 11 milhões de cópias nos Estados Unidos nas primeiras 24 horas após o seu lançamento.`
        }
      }
    }
  }
}
</script>
