# Exercício

* Desafio
  // Replique a interface como a apresentada na aula
  // Utilize a array abaixo para mostrar os produtos
  // Quebre em componentes o que precisar ser reutilizado
  // Dica: const { pathname } = window.location; (puxa o caminho do URL)
  <!-- 
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
   -->

* Resultado 
  - App.jsx
    <!-- 
    import React from 'react';
    import Header from './Header';
    import Home from './Home';
    import Produtos from './Produtos';

    const App = () => {
      const { pathname } = window.location;

      let Component;
      if (pathname === '/produtos') {
        Component = Produtos;
      } else {
        Component = Home;
      }

      return (
        <section>
          <Header />
          <Component />
        </section>
      );
    };

    export default App; 
    -->

  - Header.jsx
  <!-- 
  import React from 'react';

  const Header = () => {
    return (
      <header>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
        </ul>
      </header>
    );
  };

  export default Header; 
  -->

  - Home.jsx
  <!--
  import React from 'react';
  import Titulo from './Titulo';

  const Home = () => {
    return (
      <section>
        <Titulo texto="Home" />
        <p>Essa é a home do site</p>
      </section>
    );
  };

  export default Home;
  -->

  - Produtos.jsx
  <!-- 
  import React from 'react';
  import Titulo from './Titulo';
  import Produto from './Produto';

  const Produtos = () => {
    const produtos = [
      { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
      { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ];

    return (
      <section>
        <Titulo texto="Produtos" />
        {produtos.map((produto) => (
          <Produto key={produto.nome} {...produto} />
        ))}
      </section>
    );
  };

  export default Produtos; 
  -->

  - Produto.jsx
  <!-- 
  import React from 'react';

  const Produto = ({ nome, propriedades }) => {
    return (
      <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
        <p>{nome}</p>
        <ul>
          {propriedades.map((propriedade) => (
            <li key={propriedade}>{propriedade}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default Produto;
  -->

  - Titulo.jsx
  <!-- 
  - import React from 'react';

  const Titulo = (props) => {
    return <h1 style={{ color: '#4c8b64' }}>{props.texto}</h1>;
  };

  export default Titulo; 
  -->
