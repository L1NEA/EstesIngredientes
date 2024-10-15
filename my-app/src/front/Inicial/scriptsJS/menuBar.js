//Função da barra de menu.
import React from 'react';
import { Link } from 'react-router-dom'
import '../stylesCSS/menuBar.css';


const MenuBar = () => {
    const menu1 = "Gerar Receita"

    const menu2 = "Todas as receitas"

    const handleMenuClick = (path) => {
      window.location.href = path;
  };
  
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
            <li className="link"><Link to="/">{menu1}</Link></li>
            <li className="link"><Link to="/todas-as-receitas">{menu2}</Link></li>
          </ul>
        </nav>
      </header>
    );
  };

export default MenuBar