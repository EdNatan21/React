# Ferramentas de automação

* Conteúdo extra
  - Linha de Comando
  https://www.origamid.com/curso/javascript-completo-es6/1001-linha-de-comando

  - NPM
  https://www.origamid.com/curso/javascript-completo-es6/1002-npm

* Bundler
  - Agrupa (bundler) o código do seu aplicativo
  - Permite defirnimos os componentes em diferentes arquivos para melhorar a organização
  - Facilita a importação de código externo instalado via NPM
  - ESbuild, Rollup, Parcel, Turbopack, Webpack

* Transpiler
  - Transforma JSX return <div> </div> em funções de React.createElement()
  - Transforma javascript novo const em JavaScript antigo var
  - Babel, SWC, ESBuild

* Live Reload
  - Para atualizar automaticamente, adicione o script no final do HTML:
  <!-- 
  <script>
  new EventSource('/esbuild').addEventListener('change', () =>
    location.reload(),
  );
  </script> 
  -->