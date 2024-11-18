import React from 'react';
import '../stylesCSS/historico.css';

function ReceitaHist({ name, ingredients, steps }) {
  return (
    <div className="recipe">
      <h4>{name}</h4>
      <div className="content">
        <div className="details">
          <div className="ingredients">
            <h5>Ingredientes</h5>
            <ul style={{paddingLeft:20, paddingTop: 10, fontSize: 14}}>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="steps">
            <h5>Passo a Passo</h5>
            <ol style={{paddingLeft:20, paddingTop: 10, fontSize: 14}}>
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceitaHist;

