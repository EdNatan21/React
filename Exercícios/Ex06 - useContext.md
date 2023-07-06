# Exercício

- App.jsx
  <!--
  import React from 'react';
  import Produto from './Produto';
  import { GlobalStorage } from './GlobalContext';
  import Limpar from './Limpar';

  const App = () => {
    return (
      <GlobalStorage>
        <Produto />
        <Limpar />
      </GlobalStorage>
    );
  };

  export default App;
  -->

- Produto.jsx
  <!--
  import React from 'react';
  import { GlobalContext } from './GlobalContext';

  const Produto = () => {
    const {dados}= React.useContext(GlobalContext)

    if (dados === null) return null
    return (
    <div>
      Produto: {dados.map(produto =>
      <li key={produto.id}>{produto.nome}</li>)}
    </div>
    )
  };

  export default Produto;
  -->

- GlobalContext.jsx
  <!--
  import React from "react";

  export const GlobalContext = React.createContext()

  export const GlobalStorage = ({children}) => {
    const [dados, setDados] = React.useState(null)

    React.useEffect(() => {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      .then(response => response.json())
      .then(json => setDados(json))
    },[])

    function limparDados() {
      setDados(null)
    }

    return (
      <GlobalContext.Provider value={{dados, limparDados}}>
        {children}
      </GlobalContext.Provider>
    )
  }
  -->

- Limpar.jsx
  <!--
  import React from 'react'
  import { GlobalContext } from './GlobalContext'

  const Limpar = () => {
    const {limparDados} = React.useContext(GlobalContext)
    return (
      <button onClick={limparDados}>Limpar</button>
    )
  }

  export default Limpar
  -->
