# Link

* Link
  - O Link ira modificar a rota e renderizar o novo componente sem recarregar á página.
  <!-- 
  import { Link } from 'react-router-dom';

  const Header = () => {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="sobre">Sobre</Link>
        <Link to="contato">Contato</Link>
      </nav>
    );
  }; 
  -->

  - App.jsx
  <!-- 
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Header from './Header';
  import Home from './Home';
  import Sobre from './Sobre';
  import Contato from './Contato';

  const App = () => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    );
  }; 
  -->

* useNavigate
  - O hook useNavigate permite navegarmos programaticamente entre as rotas. Por exemplo, pode ser utilizado quando um usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta.
  <!-- 
  import { useNavigate } from 'react-router-dom';

  const Login = () => {
    const navigate = useNavigate();

    function handleClick() {
      console.log('Faz o login');
      navigate('/sobre');
    }

    return (
      <div>
        <button onClick={handleClick}>Login</button>
      </div>
    );
  }; 
  -->


