import React from 'react';
import { useState } from 'react';
import '../stylesCSS/historico.css';
import Recipe from './recipehistoria';

function Historico() {
  const recipes = [
    {
      name: 'Nome da Receita 1',
      ingredients: 'Lista de ingredientes 1',
      steps: 'Instruções passo a passo 1',
    },
    {
      name: 'Nome da Receita 2',
      ingredients: 'Lista de ingredientes 2',
      steps: 'Instruções passo a passo 2',
    },
    {
      name: 'Nome da Receita 3',
      ingredients: 'Lista de ingredientes 3',
      steps: 'Instruções passo a passo 3',
    },
  ];


  const itemsPerPage = 10; // Número de receitas por página
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula o índice das receitas para exibição na página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRecipes = recipes.slice(startIndex, endIndex);

  // Calcula o número total de páginas
  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bodyhist">
      {currentRecipes.map((recipe, index) => (
        <Recipe
          key={index}
          name={recipe.name}
          ingredients={recipe.ingredients}
          steps={recipe.steps}
        />
      ))}

      {/* Controles de Paginação */}
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1} style={{ margin: '0 10px' }}>
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages} style={{ margin: '0 10px' }}>
          Próxima
        </button>
      </div>
    </div>
  );
}

export default Historico;
