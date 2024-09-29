import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const MenuBar = () => {
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
          <li className="link"><a href="#">Gerar receita</a></li>
          <li className="link"><a href="#">Meu histórico de receitas</a></li>
          <li className="link"><a href="#">Todas as receitas</a></li>
        </ul>
      </nav>
    </header>
  );
};

const App = () => {
  return (
    <div>
      <MenuBar />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
