import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

const MenuBar = () => {
  const menu1 = "Gerar Receita"
  const menu2 = "Meu histórico de receitas"
  const menu3 = "Todas as receitas"

  return (
    <header>
      <nav className="menuBar">
        <ul>
          <li>
            <div className="logo">
              <a href="#">
                <img src="LogoNome.png" alt="Logo do Site" />
              </a>
            </div>
          </li>
          <li className="link"><a href="#">{menu1}</a></li>
          <li className="link"><a href="#">{menu2}</a></li>
          <li className="link"><a href="#">{menu3}</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Main = () => {
  const nomeDaReceita = "$Receita Gerada:"
  const fotoDaReceita = "ExemploImagemReceita.jpg"

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
      <section class="recipe-section">
        <h2 id="recipe-name">{nomeDaReceita}</h2>
        <div>
        <img src={fotoDaReceita} alt="Foto da Receita" class="image-main"/>
        </div>
        <div class="recipe-container">
          <div class="ingredientes">
            <h3>Ingredientes</h3>
            <ul>
              <li>$Quantidade do 1 Ingrediente</li>
              <li>$Quantidade do 2 Ingrediente</li>
              <li>$Quantidade do 3 Ingrediente</li>
            </ul>
          </div>
          <div class="passo-a-passo">
            <h3>Modo de Preparo</h3>
            <ul>
              <li>$1 Passo</li>
              <li>$2 Passo</li>
              <li>$3 Passo</li>
            </ul>
          </div>
        </div>
        <button id="reset-receita" class="reset-btn"><i class="fa-solid fa-arrows-rotate"></i></button>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div>
        <MenuBar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);