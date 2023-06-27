# Exercício
  
* Desafio
  (Map e Filter)
  // Organize os produtos como mostrado no vídeo
  // Mostre apenas produtos que forem mais caros que R$ 1500

* Resultado
  <!--   
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  const App = () => {
    const Dados = produtos.filter(({preco}) => Number(preco.replace('R$ ', '')) > 1500)
    
    return <section>
        {Dados.map(({id,nome,preco,cores}) => 
        <div key={id}>
        <h1>Nome: {nome}</h1>
        <p>Preço: {preco}</p>
          <ul>
            {cores.map((cor) => (
              <li key={cor} style={{color: 'white', background: cor}}>{cor}</li>
            ))}
          </ul>
        </div>
        )}
    </section>;
  }; 
  -->