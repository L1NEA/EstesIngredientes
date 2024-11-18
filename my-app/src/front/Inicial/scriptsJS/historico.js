import React, { useState, useEffect } from 'react';
import '../stylesCSS/historico.css';
import ReceitaHist from './receitaHist';

function Historico() {
  const [receitas, setReceitas] = useState([]); // Estado para armazenar as receitas
  const [currentPage, setCurrentPage] = useState(1); // Estado para a página atual
  const [loading, setLoading] = useState(true); // Estado para indicar se os dados ainda estão sendo carregados.

  const itemsPerPage = 30; // Número de receitas por página

  // Função para buscar receitas do backend
  const fetchReceitas = async () => {
    try {
      const response = await fetch('http://localhost:3001/consultarReceitas');
      const data = await response.json();
  
      // Formatar os dados recebidos da API
      const formattedData = data.map((item) => ({
        name: item.nome,
        ingredients: item.ingredientes.map(
          (ing) => `${ing.nome} - ${ing.quantidade}`
        ),
        steps: item.preparo,
      }));
  
      setReceitas(formattedData); //salva as receitas na variavel de estado
      setLoading(false); //indica que o carregamento terminou
    } catch (error) {
      console.error('Erro ao buscar receitas:', error);
      setLoading(false);
    }
  };

  // Chama a função para buscar as receitas ao montar o componente na tela
  useEffect(() => {
    fetchReceitas();
  }, []);

  // configuração da paginação
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReceitas = receitas.slice(startIndex, endIndex);

  const totalPages = Math.ceil(receitas.length / itemsPerPage);

  // configuração de permisão da paginação

  //Reduz a página atual em 1, mas apenas se não estiver na primeira página.
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  //Avança para a próxima página, desde que não seja a última.
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // mensagem de carregamento
  return (
    <div className="bodyhist">
      {/*Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados.*/}
      {loading ? (
        <p>Carregando receitas...</p>
      ) : (
        <>
          {/* Itera sobre as receitas da página atual e renderiza o componente Recipe para cada uma. */}
          {currentReceitas.map((receitaHist, index) => (
            <ReceitaHist
              key={index}
              name={receitaHist.name}
              ingredients={receitaHist.ingredients}
              steps={receitaHist.steps}
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
