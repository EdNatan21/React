# Head

* Head
  - No React não temos acesso direto as tags e informações do Head. Porém com uso de rotas é essêncial realizar a mudança do título e descrição de cada rota. Podemos fazer isso atráves de um componente ou custom hook.

  - Head.jsx
  <!-- 
  const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description);
  }, [props]);

  return <></>;
  }; 
  -->

  - Sobre.jsx
  <!-- 
  import Head from './Head';

  const Sobre = () => {
    return (
      <div>
        <Head title="Página Sobre" description="Descrição da sobre" />
        <h1>Sobre</h1>
        <p>Essa é a Sobre</p>
      </div>
    );
  }; 
  -->

  - Home.jsx
  <!-- 
  import Head from './Head';

  const Home = () => {
    return (
      <div>
        <Head title="Página Home" description="Descrição da home" />
        <h1>Home</h1>
        <p>Essa é a home</p>
      </div>
    );
  }; 
  -->

* Helmet 
  - Uma extenção famosa é o ract-helmet. Ela retorna com componente em que você pode definir tags do Head dentro do mesmo.
  <!-- https://github.com/nfl/react-helmet -->
  <!-- npm install react-helmet -->
  <!-- 
  import { Helmet } from 'react-helmet';

  const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Página Home</title>
          <meta name="description" content="Conteúdo da descrição" />
        </Helmet>
        <h1>Home</h1>
        <p>Essa é a home</p>
      </div>
    );
  }; 
  -->


