// Função geradora de Receita
import PegaIngredientes from './recipeScripts/getIngredients.js'
import GetRecipe from '../../../back/jsonExample.json';

const Receita = (props) => {
    return (
        <section className="recipe-section">
            <h2 id="recipe-name">{props.nomeDaReceita}</h2>
                <div>
                <img src={props.fotoDaReceita} alt="Foto da Receita" className="image-main"/>
                </div>
                <div className="recipe-container">
                    <div className="ingredientes">
                    <h3>Ingredientes</h3>
                    <ul>
                        {/* Criar um loop que identifica quantos ingredientes o ChatGPT usou e criar um <li> para cada um dos ingredientes
                        </li> Contar do arquivo /private/jsonExample.txt a quantidade de objetos dentro do array "Ingredientes"
                        # Importa o arquivo .json e alguma variavel de ambiente. 
                        for(i = Ingredientes.count; i > 0; i--){
                        <li> 
                        }
                        */}
                        {/*
                            {(() => {
                                const listaIngredientes = [];
                                for (let i = 0; i < ingredientesCount; i++) {
                                    listaIngredientes.push(
                                        <li key={i}>
                                            {GetRecipe.Ingredientes[i].ingrediente} - {GetRecipe.Ingredientes[i].quantidade}
                                        </li>
                                    );
                                }
                                return listaIngredientes;
                            })()}*/
                        }
                        <PegaIngredientes quantidade="20g" ingrediente="farinha"/>
                        <PegaIngredientes quantidade="2 unidades" ingrediente="ovos"/>
                    </ul>
                    </div>
                    <div className="passo-a-passo">
                    <h3>Modo de Preparo</h3>
                    <ul>
                        <li>$1 Passo</li>
                        <li>$2 Passo</li>
                        <li>$3 Passo</li>
                    </ul>
                    </div>
                </div>
            <button id="reset-receita" className="reset-btn"><i className="fa-solid fa-arrows-rotate"></i></button>
        </section>
    )
}

export default Receita