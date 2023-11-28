import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';
import './styles.css';

import api from './services/api';

function App() {

  // responsável para que eu tenha um input em React
  const [input, setInput] = useState('')

  const [error, setError] = useState({
    isError: false,
    mensagem: "Erro padrão"
  })
  // é o objeto de CEP retornado do JSON
  const [cep, setCep] = useState({});


  // handle = lide com
  // Search = busca
  // lide com a busca do CEP
  async function handleSearch() {

    // caso o cara não tenha digitado nada no campo então eu dou alert
    if (input === '') {
      // alert("Preencha algum cep")
      setError({
        isError: true,
        mensagem: "Preencha algum CEP"
      })
      // cancelo a função
      return;
    }

    //
    setError(
      {
        isError: false,

      }
    );
    try {
      // chamo o axios do api que eu importei 
      // peço pra ele um get 
      // retorna uma promessa
      const response = await api.get(`${input}/json`);
      // assim que eu receber o retorno
      setCep(response.data)
      setInput("");

    } catch {
      setError({
        isError: true,
        mensagem: "Temos um problema no servidor"
      });
      // alert("Ops! erro ao buscar");
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      {error.isError && (
        <div style={{ color: 'white' }}>
          {error.mensagem}
        </div>
      )}
      <div className="containerInput"
        style={{
          borderWidth: 5,
          borderStyle: "solid",
          borderColor: (error.isError) ? "red" : "transparent"
        }}
      >
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}

        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep} </h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default App;
