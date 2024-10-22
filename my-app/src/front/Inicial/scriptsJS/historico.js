import React from 'react';
import '../stylesCSS/historico.css';
import Recipe from './recipehistoria';

function Historico() {
  const recipes = [
    {
      name: 'Nome da Receita 1',
      image: 'bolo.jpg',
      ingredients: 'Lista de ingredientes 1',
      steps: 'Instruções passo a passo 1',
    },
    {
      name: 'Nome da Receita 2',
      image: 'bolo2.jpg',
      ingredients: 'Lista de ingredientes 2',
      steps: 'Instruções passo a passo 2',
    },
    {
      name: 'Nome da Receita 3',
      image: 'bolo3.jpg',
      ingredients: 'Lista de ingredientes 3',
      steps: 'Instruções passo a passo 3',
    },
  ];

  return (
    <div className="bodyhist">
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          name={recipe.name}
          image={recipe.image}
          ingredients={recipe.ingredients}
          steps={recipe.steps}
        />
      ))}
    </div>
  );
}

export default Historico;
