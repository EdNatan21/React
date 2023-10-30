# Memo

* React Memo
  - Retorna um componente memorizado, evitando que o mesmo seja atualizado toda vez que o estado de um elemento pai mudar. Use apenas para elementos que não dependem de estados diferentes.
  - App.jsx
  <!-- 
  import React from 'react';
  import Header from './Header';

  const App = () => {
    const [contar, setContar] = React.useState(0);
    return (
      <div>
        <Header />
        <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>
    );
  };

  export default App; 
  -->

  - Header.jsx
  <!-- 
  import React from 'react';

  const Header = () => {
    console.log('Renderizou');
    return <div>Header fixo</div>;
  };

  export default React.memo(Header); 
  -->

