import React, { useState, useEffect } from 'react';
import '../stylesCSS/historico.css';
import Recipe from './recipehistoria';

function Historico() {
  const [recipes, setRecipes] = useState([]); // Estado para armazenar as receitas
  const [currentPage, setCurrentPage] = useState(1); // Estado para a página atual
  const [loading, setLoading] = useState(true); // Estado para exibir carregamento

  const itemsPerPage = 30; // Número de receitas por página

  // Função para buscar receitas do backend
  const fetchRecipes = async () => {
    try {
      const response = await fetch('http://localhost:3001/consultarReceitas');
      const data = await response.json();
      console.log('Resposta da API:', data);
  
      // Formatar os dados recebidos da API
      const formattedData = data.map((item) => ({
        name: item.nome,
        ingredients: item.ingredientes.map(
          (ing) => `${ing.nome} - ${ing.quantidade}`
        ), // Mantém como uma lista
        steps: item.preparo, // Mantém como uma lista
      }));
  
      setRecipes(formattedData);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar receitas:', error);
      setLoading(false);
    }
  };

  // Chama a função para buscar as receitas ao montar o componente
  useEffect(() => {
    fetchRecipes();
  }, []);

  // paginação
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRecipes = recipes.slice(startIndex, endIndex);

  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bodyhist">
      {loading ? (
        <p>Carregando receitas...</p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Historico;
