# Router

* React Router Dom  
  - É uma extensão que permite gerenciarmos as rotas do React.
  <!-- https://reactrouter.com/ -->
  <!-- npm install react-router-dom -->

* BrowserRouter, Routes e Route
  - O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router. O Routes deve a área que vamos colocar nosso Route. O Router recebe um caminho em path, se esse caminho for o mesmo da URL ele irá renderizar o componente que estiver dentro do element={}.
  <!-- 
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Contato from './Contato';
  import Sobre from './Sobre';
  import Home from './Home';

  const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    );
  }; 
  -->

* 404 não encontrado
  - O * renderiza um elemento para todas as rotas que não foram encontradas no path. Uso ideal para mostrarmos um componente indicando que a página não existe.
  <!-- 
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Sobre from './Sobre';
  import Pagina404 from './Pagina404';

  const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    );
  };   
  -->


