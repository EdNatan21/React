# useReducer

* useReducer
  - Serve para lidarmos com estados que possuem funções fixas responsáveis por modificar o mesmo.
  <!-- 
  function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'reduzir':
      return state - 1;
    default:
      throw new Error();
  }
  }

  const App = () => {
    const [state, dispatch] = React.useReducer(reducer, 0);

    return (
      <div>
        <button onClick={() => dispatch('aumentar')}>+</button>
        <button onClick={() => dispatch('reduzir')}>-</button>
        <p>{state}</p>
      </div>
    );
  }; 
  -->

  - sem o reducer
  <!-- 
  const App = () => {
  const [contar, setContar] = React.useState(0);

  function aumentar() {
    setContar(contar + 1);
  }

  function reduzir() {
    setContar(contar - 1);
  }

  return (
    <div>
      <button onClick={aumentar}>+</button>
      <button onClick={reduzir}>-</button>
      <p>{contar}</p>
    </div>
  );
  }; 
  -->

