# CSS Module

* Css
  - Os modules garantem que as classes utilizadas sejam sempre únicas, evitando conflito. O modo ja vem configurado com create-react-app, basta definirmos o nome do arquivo css com a palavra .module. Ex: Produto.module.css. Devemos definir um nome para a impotação, a mesma será transformada em um objeto que possui nomes únicos para as classes.
  
  - Produto.jsx
  <!-- 
  import styles from './Produto.module.css';

  const Produto = () => {
    return (
      <div>
        <h1 className={styles.titulo}>Notebook</h1>
        <p className={styles.preco}>R$ 12000</p>
        <button className={styles.comprar}>Comprar</button>
      </div>
    );
  }; 
  -->

  - Produto.module.css
  <!-- 
  .titulo,
  .preco {
    color: #43c;
  }

  .preco {
    font-weight: bold;
  }

  .comprar {
    transform: rotate(90deg) translateY(-100px);
  } 
  -->

* camelCase
  - Utilize camelCase tituloPrincipal, já que o nome da classe se tranformará em uma propriedade de um objetode javascript. Não utilize hífens titulo-principal.
  - Exemplo:
  <!-- 
  .tituloPrincipal {
  color: blue;
  } 
  -->

* Funcionalidade Extras
  - O CSS Module disponibiliza algumas funcionalidades extras para o CSS, como a definição de váriaveis, composição de elementos e definição de classes no contexto global. Não aconselho o uso, pois a sintaxe não e bem suportada pela IDE(VS Code) e pelo eslint.
  <!-- .titulo {
    color: #43c;
  }

  /* no local de composes use a vírgula .titulo, .preco {} */
  .preco {
    composes: titulo;
    font-weight: bold;
  }

  /* no local de variáveis utilize variáveis de CSS com o var() */
  @value width: 900px;

  /* crie um css global utilizando o IMPORT puro para quando precisar de estilos globais */
  :global .container {
    max-width: width;
  }
  -->




