import React from 'react';
import '../stylesCSS/historico.css';

function Recipe({ name, image, ingredients, steps }) {
  return (
    <div className="recipe">
      <h4>{name}</h4>
      <div className="content">
        <div className="details">
          <div className="ingredients">
            <h5>Ingredientes</h5>
            <p>{ingredients}</p>
          </div>
          <div className="steps">
            <h5>Passo a Passo</h5>
            <p>{steps}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;