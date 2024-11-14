import PegaIngredientes from './recipeScripts/getIngredients.js';

const Receita = ({ nomeDaReceita, fotoDaReceita, ingredientes, passos }) => {
    return (
        <section className="recipe-section">
            <h2 id="recipe-name">{nomeDaReceita}</h2>
            <div className="recipe-container">
                <div className="ingredientes">
                    <h3>Ingredientes</h3>
                    <ul style={{ listStyleType: 'circle', lineHeight: '150%'  }}>
                        {ingredientes && ingredientes.map((item, index) => (
                            <PegaIngredientes
                                key={index}
                                quantidade={item.quantidade}
                                ingrediente={item.nome}
                            />
                        ))}
                    </ul>
                </div>
                <div className="passo-a-passo">
                    <h3>Modo de Preparo</h3>
                    <ul style={{ listStyleType: 'square', lineHeight: '150%' }}>
                        {passos && passos.map((passo, index) => (
                            <li key={index}>{passo}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <button id="reset-receita" className="reset-btn"><i className="fa-solid fa-arrows-rotate"></i></button>
        </section>
    );
};

export default Receita;
