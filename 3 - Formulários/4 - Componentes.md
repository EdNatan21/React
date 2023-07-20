# Componentes

* Input
  - Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.
  - Input.jsx
    <!-- 
    const Input = ({ id, label, setValue, ...props }) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={id}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </>
    );
    }; 
    -->
  - App.jsx
    <!-- 
    const App = () => {
    const [nome, setNome] = React.useState('');

    return (
      <form>
        <Input
          label="Nome"
          id="nome"
          type="text"
          value={nome}
          setValue={setNome}
        />
      </form>
    );
    }; 
    -->


* Select
  - Select.jsx
    <!-- 
    const Select = ({ options, value, setValue, ...props }) => {
    return (
      <select
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
    }; 
    -->
  - App.jsx
  <!-- 
  const App = () => {
  const [produto, setProduto] = React.useState('');

  return (
    <form>
      <Select
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
    </form>
  );
  }; 
  -->

* Radio
  - Radio.jsx
    <!-- 
    const Radio = ({ options, value, setValue, ...props }) => {
    return (
      <>
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={({ target }) => setValue(target.value)}
              {...props}
            />
            {option}
          </label>
        ))}
      </>
    );
    };
    -->
  - App.jsx
    <!-- 
    const App = () => {
    const [cor, setCor] = React.useState('');

    return (
      <form>
        <Radio
          options={['azul', 'verde', 'amarelo']}
          value={cor}
          setValue={setCor}
        />
      </form>
    );
    }; 
    -->

* Checkbox
  - Checkbox.jsx
  <!-- 
  const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((cor) => cor !== target.value));
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  );
  }; 
  -->
  - App.jsx
    <!-- 
    const App = () => {
    const [fruta, setFruta] = React.useState([]);
    const [termos, setTermos] = React.useState([]);

    return (
      <form>
        <Checkbox
          options={['Uva', 'Laranja', 'Limão']}
          value={fruta}
          setValue={setFruta}
        />

        <Checkbox
          options={['Termos e Condições']}
          value={termos}
          setValue={setTermos}
        />
      </form>
    );
    }; 
    -->






