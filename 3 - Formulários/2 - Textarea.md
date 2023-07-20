# Textarea, Select, Radio

* Textarea
  - No React o textarea é utilizado como input, uma tag única sem abertua/fechamento e com value para definir o seu valor interno.
  <!-- 
  const App = () => {
  const [mensagem, setMensagem] = React.useState('');

  return (
    <form>
      <textarea
        id="mensagem"
        value={mensagem}
        rows="5"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <p>{mensagem}</p>
    </form>
  );
  };
  -->

* Select
  - o value e onChange são definidos no select. Para definir um valor inicial, coloque o mesmo no useState.
  <!-- 
  const App = () => {
    const [select, setSelect] = React.useState('smartphone');

    return (
      <form>
        <select value={select} onChange={({ target }) => setSelect(target.value)}>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
        <p>{select}</p>
      </form>
    );
  };
  -->

* Selecione
  - Defina o primeiro valor como disable e com uma string pura, assim o usuário terá que selecionar um valor.
  <!-- 
  const App = () => {
  const [select, setSelect] = React.useState('');

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
  }; 
  -->

* Radio
  - No radio comparemos o valor selecionado com o valor do input, dentro do atributo checked. O que retorna true irá marcar o botão.
  <!-- 
  const App = () => {
  const [radio, setRadio] = React.useState('');

  function handleChange({ target }) {
    setRadio(target.value);
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={radio === 'notebook'}
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={radio === 'smartphone'}
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="tablet"
          checked={radio === 'tablet'}
          onChange={handleChange}
        />
        Tablet
      </label>
    </form>
  );
  }; 
  -->


