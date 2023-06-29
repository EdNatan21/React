# Exercício

* Desafio
  <!-- 
  // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  // Defina o produto clicado como uma preferência do usuário no localStorage
  // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
   -->

* Resultado
  - App.jsx
    <!-- 
    import React from 'react'
    import Produto from './Produto'

    const App = () => {
      const [produto, setProduto] = React.useState(null) 

      function handleClick({target}) {
        setProduto(target.innerText)
      }

      React.useEffect(() => {
        const produtoLocal = localStorage.getItem('produto')
        if (produtoLocal !== null) setProduto(produtoLocal)
      },[])

      React.useEffect(() => {
        if(produto !== null) window.localStorage.setItem('produto', produto)
      }, [produto])

      return (
        <div>
          <h1>Preferência: {produto}</h1>
          <button onClick={handleClick} style = {{margin: '10px'}}>Notebook</button>
          <button onClick={handleClick}>Smartphone</button>
          <Produto produto={produto}/>
        </div>
      )
    }

    export default App 
    -->

  - Produto.jsx
    <!-- 
    import React from 'react'

    const Produto = ({produto}) => {
      const [dados, setDados] = React.useState(null)
      
      React.useEffect(() =>{
        if(produto !== null)
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
          .then((response) => response.json())
          .then(json => setDados(json))
      },[produto])

      if(dados === null) return null
      return (
        <div>
          <h1>{dados.nome}</h1>
          <p>{dados.preco}</p>
        </div>
      )
    }

    export default Produto 
    -->

