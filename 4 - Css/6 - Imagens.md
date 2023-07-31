# Imagens

* Imagens
  - Podemos importar a imagem direto para o componente. O webpack irá gerar o caminho correto na build final.
  <!-- 
  import foto from './img/foto.jpg';

  const App = () => {
    return (
      <div>
        <img src={foto} alt="Cachorro" />
      </div>
    );
  }; 
  -->

* Svg 
  - Um svg pode ser adicionado da mesma forma que as anteriores, porém ele também pode ser adicionado como um componente. Dessa forma o código do SVG inteiro é injetado direto no HTML, dando maior controle sobre o mesmo. 

  - No vite é necessário um plugin para ativar essa funcionalidade. No create-react-app essa funcionalidade vem instalada por padrão.
  <!-- npm install vite-plugin-svgr -->
  
  - vite.config.jsx
  <!-- import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import eslintPlugin from 'vite-plugin-eslint';
  import svgr from 'vite-plugin-svgr';

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [
      react(),
      eslintPlugin({
        cache: false,
        include: ['./src/**/*.js', './src/**/*.jsx'],
      }),
      svgr(),
    ],
  }); -->

* 

