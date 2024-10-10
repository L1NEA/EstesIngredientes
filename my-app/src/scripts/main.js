//Função principal do Estes Ingredientes.
import '../styles/main.css';
import Box from './box.js';
import Receita from './receita.js';

const Main = () => {
  return (
    <div class="container">
      <section class="fixed-container">
        <img src="Logo.png" alt="Logo Chef Robô" class="image-main" />
        <h1>Os ingredientes que você tem, transformados em receitas deliciosas em segundos!</h1>
      </section>
      <section class="prompt-section">
        <label for="ingredientes">Insira todos seus ingredientes separados por vírgula.</label>
        <div class="input-container">
          <input type="text" id="ingredientes" placeholder="Exemplo: tomate, alho, cebola" />
          <button id="gerar-receita">Gerar receita</button>
        </div>
      </section>
      <Receita nomeDaReceita="Bolo de Chocolate" fotoDaReceita="ExemploImagemReceita.jpg"/>
      <Box />
    </div>
  );
};

export default Main