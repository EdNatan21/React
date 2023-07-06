#  Custom Hooks

* useLocalStorage
  podemos criar nossos próprios Hooks, assim evitarmos a repetição de código. Todo custom hook deve começar com a palavra use. Exemplo: useNomeDoHook. Podemos retornar o que quisermos do hook, seja um valor único, um array ou objeto.
  <!-- 
  const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
  }; 
  -->

* useFetch
  - Aqui o useCallback é necessário para evitar um render infinito. 
  <!-- 
  import React from 'react';

  const useFetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const request = React.useCallback(async (url, options) => {
      let response;
      let json;
      try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        json = await response.json();
        if (response.ok === false) throw new Error(json.message);
      } catch (err) {
        json = null;
        setError(err.message);
      } finally {
        setData(json);
        setLoading(false);
        return { response, json };
      }
    }, []);

    return { data, loading, error, request };
  };

  export default useFetch; 
  -->



