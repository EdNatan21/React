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