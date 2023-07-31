# Animações

* Animation
  - anime a entrada de elementos utilizando a propriedade animation.
  <!-- 
  .animeLeft {
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: initial;
      transform: initial;
    }
  }
  -->

  - App.jsx
  <!-- 
  const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </div>
  );
  }; 
  -->

  - Produto.jsx
  <!-- 
  const Produto = () => {
  return (
    <div className="animeLeft">
      <h1>Notebook</h1>
      <span>R$ 2000</span>
    </div>
  );
  }; 
  -->


