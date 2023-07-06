# useMemo e useCallback
  
* useMemo
  - Memoriza um valor, evitando a recriação do mesmo todas as vezes que o componente for atualizado. Recebe um callc=back e um array de dependências.
  <!-- 
  const App = () => {
  const [contar, setContar] = React.useState(0);
  const valor = React.useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto');
    // só será executado uma vez
    console.log('teste');
    return localStorageItem;
  }, []);
  console.log(valor);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
  }; 
  -->

  - useMemo Teste
  <!-- 
  function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
  }

  const App = () => {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  // é mais rápido que
  // const valor = operacaoLenta();
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
  }; 
  -->

* useCallback
  - Permite definirmos um callback e uma lista de depedências do callback. Esse callback só sera recriado se essa lista de depedências for modificada, caso contrário ele não irá recriar o callback.
    <!-- 
    const App = () => {
    const [contar, setContar] = React.useState(0);

    const handleClick = React.useCallback(() => {
      setContar((contar) => contar + 1);
    }, []);

    return <button onClick={handleClick}>{contar}</button>;
    }; 
    -->

  - useCalback Teste, uma prova de que useCallback não irá criar uma nova função. Isso não significa que ele é mais ou menos otimizado. o Set() é utilizado pois ele permite apenas valores unicos dentro do mesmo.
    <!-- 
    const set1 = new Set();
    const set2 = new Set();

    const Produto = () => {
    const func1 = () => {
      console.log('Teste');
    };

    const func2 = React.useCallback(() => {
      console.log('Teste');
    }, []);

    set1.add(func1);
    set2.add(func2);

    console.log('Set1:', set1);
    console.log('Set2:', set2);
    return (
      <div>
        <p onClick={func1}>Produto 1</p>
        <p onClick={func2}>Produto 2</p>
      </div>
    );
    };

    const App = () => {
    const [contar, setContar] = React.useState(0);

    return (
      <div>
        <Produto />
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>
    );
    };
    -->



