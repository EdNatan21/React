# Nested Routes

* Nested Routes
  - Utilizamos nested routes quando precismaos de rotas dentro de rotas. Como por exemplo: perfil/editar e perfil/certificado e etc. Utilize o *\ para definir que existem outras rotas dentro. 

  - App.jsx
  <!--
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Home from './Home';
  import Sobre from './Sobre';
  import Login from './Login';
  import Produto from './Produto';
  import Header from './Header';
  import NaoEncontrada from './NaoEncontrada';

  const App = () => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="login" element={<Login />} />
          <Route path="produto/:id/*" element={<Produto />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </BrowserRouter>
    );
  };
  -->

  - Produto.jsx
  <!-- 
  import { useParams, Route, Routes, NavLink } from 'react-router-dom';
  import ProdutoDescricao from './ProdutoDescricao';
  import ProdutoAvaliacao from './ProdutoAvaliacao';
  import ProdutoCustomizado from './ProdutoCustomizado';

  const Produto = () => {
    const params = useParams();

    return (
      <div>
        <h1>Produto: {params.id}</h1>
        <nav>
          <NavLink to="">Descrição</NavLink>
          <NavLink to="avaliacao">Avaliação</NavLink>
          <NavLink to="customizado">Customizado</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Routes>
      </div>
    );
  };
  -->

* Outlet
  - Outra forma é definindo todas as rotas diretamente no App e utilziar o component Outlet para mostrarmos a rota. 
  <!-- 
  const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
  }; 
  -->

  - App.jsx
  <!-- 
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Home from './Home';
  import Sobre from './Sobre';
  import Login from './Login';
  import Produto from './Produto';
  import Header from './Header';
  import NaoEncontrada from './NaoEncontrada';
  import ProdutoDescricao from './ProdutoDescricao';
  import ProdutoAvaliacao from './ProdutoAvaliacao';
  import ProdutoCustomizado from './ProdutoCustomizado';

  const App = () => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="login" element={<Login />} />
          <Route path="produto/:id/*" element={<Produto />}>
            <Route path="/" element={<ProdutoDescricao />} />
            <Route path="avaliacao" element={<ProdutoAvaliacao />} />
            <Route path="customizado" element={<ProdutoCustomizado />} />
          </Route>
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </BrowserRouter>
    );
  }; 
  -->



