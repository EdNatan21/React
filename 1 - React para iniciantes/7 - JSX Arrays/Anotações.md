# JSX Arrays

* Jsx Arrays
  - O JSX irá listar cada uns dos iten da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.
  <!-- 
  const App = () => {
  const produtos = ['Notebook', 'Smartphone', 'Tablet'];

  return <p>{produtos}</p>;
  };
  -->

* Keys
  - O JSX necessita de uma key única para cada elemento da Array.
  <!-- 
  const App = () => {
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

  return <ul>{empresas}</ul>;
  };
  -->

* Map
  - É comum utilizarmos o map direto no array como uma expressão, retornando um elemento para cada item novo do array.
  <!-- 
  const App = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
  }; 
  -->

* Array de objetos
  - O Cenário mais comum é trabalhar com array's de objetos.
  <!-- 
  const App = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
  );
  }; 
  -->