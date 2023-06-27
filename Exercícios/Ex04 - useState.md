# Exercício

* Desafio 
  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado

* Resultado
  - App.jsx
    <!-- 
    import React from 'react'
    import Produtos from './Produtos'

    const App = () => {
      const [dados, setDados] = React.useState(null)
      const [carregando, setCarregando] = React.useState(null)

      async function handleClick(event) {
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)

        const json = await response.json()
        setDados(json)
        setCarregando(false)
      }

      return (
      <div>
        <button style={{margin:'10px'}} onClick={handleClick}>Notebook</button>
        <button style={{margin:'10px'}} onClick={handleClick}>Smartphone</button>
        <button style={{margin:'10px'}} onClick={handleClick}>Tablet</button>
        {carregando && <p>Carregando...</p>}
        {!carregando && dados && <Produtos dados={dados}/>}
      </div>
      )
    }

    export default App 
    -->
  
  - Index.jsx
    <!-- 
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'

    ReactDOM.createRoot(document.getElementById('root')).render(<App />) 
    -->

  - Produto.jsx
    <!-- 
    import React from 'react'

    const Produtos = ({dados}) => {
      return (
        <div>
          <h1>{dados.nome}</h1>
          <p>Preço: {dados.preco}</p>
          <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        </div>
      )
    }

    export default Produtos 
    -->