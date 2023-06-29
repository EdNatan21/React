# useRef

* useRef
  - Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem utilizar o querySelector ou similar.
    <!-- 
      const App = () => {
      const [comentarios, setComentarios] = React.useState([]);
      const [input, setInput] = React.useState('');
      const inputElement = React.useRef();

      function handleClick() {
        setComentarios((comentarios) => [...comentarios, input]);
        setInput('');
        inputElement.current.focus();
      }

      return (
        <div>
          <ul>
            {comentarios.map((comentario) => (
              <li key={comentario}>{comentario}</li>
            ))}
          </ul>
          <input
            type="text"
            value={input}
            ref={inputElement}
            onChange={({ target }) => setInput(target.value)}
          />
          <br />
          <button onClick={handleClick}>Enviar</button>
        </div>
      );
      }; 
    -->


* Refências 
  - O seu uso não e restrito a elementos do DOM. Podemos utilizar para guardarmos qualquer a referência de qualquer valor, como um setTimeout por exemplo.
    <!-- 
    const App = () => {
    const [contar, setContar] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState(null);
    const timeoutRef = React.useRef();

    function handleClick() {
      setNotificacao('Obrigado por comprar');
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setNotificacao(null);
      }, 1000);
      setContar(contar + 1);
    }

    return (
      <div>
        <p>{notificacao}</p>
        <button onClick={handleClick}>{contar}</button>
      </div>
    );
    };
    -->
