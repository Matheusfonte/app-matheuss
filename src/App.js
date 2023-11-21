import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

       <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu cep..."
        />

        <button>Pesquisar</button>
       </div>

       <main className="main">
        <h2>CEP: 79003222</h2>

        <span>Rua Teste algum</span>
        <span>Complemento: Algum</span>
        <span>Víla Rosa</span>
        <span>Campo Grande - MS</span>


       </main>

    </div>
  );
}

export default App;
