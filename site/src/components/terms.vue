<template>
  <q-dialog
  v-model="terms"
  persistent
  :maximized="true"
  transition-show="slide-up"
  transition-hide="slide-down">
  <div class="o-modal bg-white" :class="{ 'q-dark': $q.dark.isActive }">
    <div class="o-modal_header bg-primary" :class="{ 'q-dark': $q.dark.isActive }">
      <h2 class="o-modal_title">{{ $t('profile.terms.header') }}</h2>
      <q-btn
      flat
      icon="close"
      @click="closeTerms"/>
    </div>
    <div class="o-modal_content m-terms">
      <q-card class="m-card">
        <q-card-section>
          <h2 class="a-title -primary -left">Política Privacidade</h2>
          <p class="a-text m-terms_text">
            A sua privacidade é importante para nós. É política do PineappleDevs respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site PineappleDevs, e outros sites que possuímos e operamos.
          </p>
          <p class="a-text m-terms_text">
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <p class="a-text m-terms_text">
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
          <p class="a-text m-terms_text">
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>
          <p class="a-text m-terms_text">
            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>
          <p class="a-text m-terms_text">
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>
          <p class="a-text m-terms_text">
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
          </p>
          <h2 class="a-title -primary -left">Política de Cookies PineappleDevs</h2>
          <h3 class="a-title -primary -left -light">O que são cookies?</h3>
          <p class="a-text m-terms_text">
            Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.
          </p>

          <h3 class="a-title -primary -left -light">Como usamos os cookies?</h3>
          <p class="a-text m-terms_text">
            Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.
          </p>

          <h3 class="a-title -primary -left -light">Desativar cookies</h3>
          <p class="a-text m-terms_text">
            Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.
          </p>

          <h3 class="a-title -primary -left -light">Cookies que definimos</h3>
          <ul class="a-text m-terms_text">
            <li class="m-terms_list-item">
              <p>Cookies relacionados à conta</p>
              <p>Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.</p>
            </li>
            <li class="m-terms_list-item">
              <p>Cookies relacionados ao login
              <p>Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.</p>
            </li>
            <li class="m-terms_list-item">
              <p>Cookies relacionados a boletins por e-mail</p>
              <p>Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos / não inscritos.</p>
            </li>
            <li class="m-terms_list-item">
              <p>Pedidos processando cookies relacionados</p>
              <p>Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.</p>
            </li>
            <li class="m-terms_list-item">
              <p>Cookies relacionados a pesquisas</p>
              <p>Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.</p>
            </li>
            <li class="m-terms_list-item">
              <p>Cookies relacionados a formulários</p>
              <p>Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.</p>
            </li>
            <li class="m-terms_list-item">
              <p>Cookies de preferências do site</p>
              <p>Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.</p>
            </li>
          </ul>
          <h3 class="a-title -primary -left -light">Cookies de Terceiros</h3>
          <p class="a-text m-terms_text">
            Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.
          </p>
          <!-- <ul class="a-text m-terms_text">
            <li class="m-terms_list-item">
              <p>Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.</p>
            </li>
          </ul> -->
          <!-- <p class="a-text m-terms_text">
            Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.
          </p> -->
          <ul class="a-text m-terms_text">
            <li class="m-terms_list-item">
              <p>As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.</p>
            </li>
            <li class="m-terms_list-item">
              <p>Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.</p>
            </li>
            <li class="m-terms_list-item">
              <p>À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analizar nossos custos de publicidade e produtos para garantir o melhor preço possível.</p>
            </li>
          </ul>
          <h3 class="a-title -primary -left -light">Mais informações</h3>
          <p class="a-text m-terms_text">
            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
          </p>
          <p class="a-text m-terms_text">
            Esta política é efetiva a partir de <strong>Setembro/2020</strong>.
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
  </q-dialog>
</template>

<script>
export default {
  name: 'Terms',
  props: {
    terms: Boolean
  },
  methods: {
    closeTerms () {
      this.$emit('close')
    }
  }
}
</script>
