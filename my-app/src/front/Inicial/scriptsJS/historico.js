import React from 'react';
import '../stylesCSS/historico.css';
import MenuBar from './menuBar.js'


function Historico() {
  return (
    
    <div className="bodyhist">
      <MenuBar />
      <div className="recipe">
        <h4>Nome da Receita 1</h4>
        <div className="content">
          <img src="bolo.jpg" alt="Imagem da Receita 1" />
          <div className="details">
            <div className="ingredients">
              <h5>Ingredientes 1:</h5>
              <p>Lista de ingredientes</p>
            </div>
            <div className="steps">
              <h5>Passo a Passo 1:</h5>
              <p>Instruções passo a passo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="recipe">
        <h4>Nome da Receita 2</h4>
        <div className="content">
          <img src="bolo2.jpg" alt="Imagem da Receita 2" />
          <div className="details">
            <div className="ingredients">
              <h5>Ingredientes 2:</h5>
              <p>Lista de ingredientes</p>
            </div>
            <div className="steps">
              <h5>Passo a Passo 2:</h5>
              <p>Instruções passo a passo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="recipe">
        <h4>Nome da Receita 3</h4>
        <div className="content">
          <img src="bolo3.jpg" alt="Imagem da Receita 3" />
          <div className="details">
            <div className="ingredients">
              <h5>Ingredientes 3:</h5>
              <p>Lista de ingredientes</p>
            </div>
            <div className="steps">
              <h5>Passo a Passo 3:</h5>
              <p>Instruções passo a passo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historico;
