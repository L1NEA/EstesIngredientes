import React from 'react';
import '../stylesCSS/historico.css';

function Historico() {
  return (
    <div className="bodyhist">
      <div className="recipe">
        <h4>Nome da Receita</h4>
        <div className="content">
          <img src="bolo.jpg" alt="Imagem da Receita 1" />
          <div className="details">
            <div className="ingredients">
              <h5>Ingredientes</h5>
              <p>Lista de ingredientes</p>
            </div>
            <div className="steps">
              <h5>Passo a Passo</h5>
              <p>Instruções passo a passo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historico;
