# Ambiente do curso

* index.html
  <!-- 
  <link rel="stylesheet" href="./style.css" />
   -->

* public/style.css (CSS)
  <!-- 
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-title: Georgia, 'Times New Roman', Times, serif;
    --font-size: 1.2rem;
    --color: #19f;
    --color-light: #adf;
    --color-dark: #018;
    --radius: 0.2rem;
  }

  body {
    margin: 1.5rem;
  }

  body,
  input,
  textarea,
  button {
    font-size: var(--font-size);
    font-family: var(--font);
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-title);
  }

  h1,
  h2,
  h3,
  p,
  ul {
    margin: 1rem 0;
  }

  ul {
    list-style: square;
  }

  li {
    margin-bottom: 0.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.25rem;
  }

  input,
  textarea {
    display: block;
    border: 1px solid #ccc;
    width: 100%;
    padding: 0.8rem;
    border-radius: var(--radius);
    background: #eee;
    transition: 0.2s;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--color);
    background: white;
    box-shadow: 0 0 0 3px var(--color-light);
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: var(--radius);
    transition: 0.1s;
    background: var(--color);
    color: var(--color-dark);
    padding: 0.8rem 1.6rem;
  }

  button:hover,
  button:focus {
    background: var(--color);
    box-shadow: 0 0 0 3px var(--color-light), 0 0 0 4px var(--color);
    outline: none;
  }

  button:active {
    box-shadow: 0 0 0 3px var(--color), 0 0 0 4px var(--color);
  }

  button:disabled {
    opacity: 0.5;
    cursor: wait;
  }

  hr {
    border: 2px solid black;
    margin: 2rem auto;
  } 
  -->

* Esconder Arquivos
  - Não recomendo usar, mas eu irei durante o curso apenas para deixar a interface mais limpa:
  - .vscode/settings.json
  <!-- 
  {
  "git.enabled": false,
  "files.exclude": {
    "node_modules": true,
    ".vscode": true,
    ".gitignore": true,
    "package.json": true,
    "package-lock.json": true,
    ".eslintrc.json": true,
    "vite.config.js": true,
    "public": true,
    "index.html": true
  }
  } 
  -->

* Modo Estrito
  - o modo estrito do React permite pegarmos alguns bugs no desenvolvimento.
  - Sem modo estrito:
  <!--
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
  -->
  - Com modo estrito:
  <!-- 
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  ); 
  -->

* Js vs Jsx
  - Durante o curso você verá eu utilizando .js em arquivos jsx, o create-react-app permitia isso, porém o Vite não permite.

  Então todo arquivo novo que você criar, use .jsx.
  <!-- index.js > main.jsx -->
