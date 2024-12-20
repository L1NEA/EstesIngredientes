//Função principal do Estes Ingredientes.
import React, { useState } from 'react';
import axios from 'axios';
import '../stylesCSS/main.css';
import Box from './box.js';
import Receita from './receita.js';

const Main = () => {
  const [buscaIngredientes, setBuscaIngredientes] = useState('');
  const [tipoReceita, setTipoReceita] = useState('salgada'); // Estado para armazenar o tipo de receita
  const [resultado, setResultado] = useState(null);

  const promptBusca = `Me entregue uma receita ${tipoReceita} que contenha esses ingredientes [${buscaIngredientes}] no formato de JSON abaixo:
  {
    "nome": "",
    "ingredientes": [
      {
        "nome": "",
        "quantidade": ""
      }
    ],
    "passos": [
      ""
    ]
  }
  Atente-se em deixar a lista de passos em ordem de execução`;

  const onBuscaRealizada = async () => {
    try {
      // Passando o prompt como parte do corpo da requisição POST
      const response = await axios.post("http://localhost:3001/pergunte-ao-gemini", { prompt: promptBusca });
      const completionText = response.data.completion.replace(/```json|```/g, "").trim();
      setResultado(JSON.parse(completionText)); // Atualiza o resultado com a resposta da API
    } catch (error) {
      console.error("Erro ao obter resposta:", error);
    }
  };

  return (
    <div className="container">
      <section className="fixed-container">
        <img src="Logo.png" alt="Logo Chef Robô" className="image-main" />
        <h1>Os ingredientes que você tem, transformados em receitas deliciosas em segundos!</h1>
      </section>
      <section className="prompt-section">
        <p>Insira todos seus ingredientes separados por vírgula.</p>
        <div className="input-container">
          <input
            type="text"
            id="ingredientes"
            placeholder="Tomate, alho, cebola, farinha"
            value={buscaIngredientes}
            onChange={(e) => setBuscaIngredientes(e.target.value)}
          />
        </div>
        <div className="radio-container">
          <label>
            <input
              type="radio"
              name="tipoReceita"
              value="salgada"
              checked={tipoReceita === 'salgada'}
              onChange={(e) => setTipoReceita(e.target.value)}
              style={{marginRight: 4}}
            />
            Receita Salgada
          </label>
          <label>
            <input
              type="radio"
              name="tipoReceita"
              value="doce"
              checked={tipoReceita === 'doce'}
              onChange={(e) => setTipoReceita(e.target.value)}
              style={{marginRight: 4}}
            />
            Receita Doce
          </label>
        </div>
        <button id="gerar-receita" onClick={onBuscaRealizada}>Gerar receita</button>
      </section>
      {resultado && (
        <Receita
          nomeDaReceita={resultado.nome}
          fotoDaReceita={resultado.foto}
          ingredientes={resultado.ingredientes}
          passos={resultado.passos}
        />
      )}
      <Box />
    </div>
  );
};

export default Main;
