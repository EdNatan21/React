# JSX

* Jsx
  - JavaScript XML/ Extension. Estende a sintaxe do JavaScript, introduzindo elementos XML que são convertidos em funções React.
    <!-- 
    const App = () => {
    return <button>Comprar</button>;
    }; 
    -->
  É transformado em
    <!-- 
    const App = () => {
    return React.createElement('button', null, 'Comprar');
    }; 
    -->

* Atributos
  - Atributos podem ser passados como no HTML, porém com alguns casos especiais.

* Casos Especiais
  - O caso especial mais comum é o atributo class. Pelo fato do class ser um palavra reservada no JavaScript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className.
  <!-- 
  const App = () => {
  return <div className="grid">Origamid</div>;
  }; 
  -->
  - For (Label) = htmlFor
  <!-- 
  const App = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>
    );
  }; 
  -->

* camelCase
  - atributos com nome composto devem ser utilizados como camelCase. Ex: autoplay vira autoPlay.
    <!-- 
    const App = () => {
    return <video autoPlay />;
    }; 
    -->

* Expressões/Variáveis
    - Expressões e variáveis podem ser colocados dentro do JSX utilizando chaves {}.
    <!--
     const App = () => {
    const nome = 'André';
    return <p>{nome}</p>;
    }; 
    -->

    <!-- 
    const App = () => {
    const desconto = 50;
    const preco = 250;
    return <p>{preco - desconto}</p>;
    }; 
    -->

    <!-- 
    const App = () => {
    const ativo = true;
    return <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>;
    }; 
    -->

    - Também posso atribuir JSX direto a uma constante/variável
    <!-- 
    const Titulo = <h1>Meu título</h1>;
    const App = () => {
      return <div>{Titulo}</div>;
    }; 
    -->

* JSX Expressões
    - Você pode executar qualquer expressão dentro das chaves {}. Se o resultado da expressão for um número, string ou array de números/strings o resultado irá aparecer na tela. Booleanos (true/false), undefined e null não irão resultar em nada na tela. Objetos irão retornar um erro.

* Style
    - O style irá receber um objeto com as propriedades do elemento em camelCase.
    <!-- 
    const App = () => {
    const estiloH1 = {
      color: 'blue',
      fontSize: '20px',
      fontFamily: 'Helvetica',
    };

    return (
      <div>
        <h1 style={estiloH1}>Empresa</h1>
        <p style={{ color: 'green' }}>Sempre aberta</p>
      </div>
    );
    }; 
    -->