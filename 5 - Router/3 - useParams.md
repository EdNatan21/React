# useParams

* Rota dinâmica
  - O uso de :nome irá definir uma rota dinâmica, onde o nome poderá ser utilizado como uma váriavel dentro do componente. Serve para buscarmos rotas dinâmicas como produto/notebook ou produto/smartphone.
  <!-- 
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Produto from './Produto';
  import Home from './Home';
  import Header from './Header';

  const App = () => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produto/:id" element={<Produto />} />
        </Routes>
      </BrowserRouter>
    );
  }; 
  -->

* useParams 
  - O hook useParams terá um objeto com todos os paramêtros da rota. É possível ter mais de um parâmetro.
  <!-- 
  import { useParams } from 'react-router-dom';

  const Produto = () => {
    const params = useParams();

    return (
      <div>
        <h1>Produto</h1>
        <p>id: {params.id}</p>
      </div>
    );
  }; 
  -->

* useLocation 
  - Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, paramêtros de buscas e mais.
  <!-- 
  import { useLocation } from 'react-router-dom';

  const Header = () => {
    const location = useLocation();

    React.useEffect(() => {
      const search = new URLSearchParams(location.search);
      console.log(search.get('q'));
      console.log('Toda vez que a rota mudar');
    }, [location]);

    return <div></div>;
  }; 
  -->


