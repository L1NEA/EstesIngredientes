// Função geradora de Receita
import PegaIngredientes from './recipeScripts/getIngredients.js'
import GetRecipe from '../private/jsonExample.json'

const Receita = (props) => {
    return (
        <section class="recipe-section">
            <h2 id="recipe-name">{props.nomeDaReceita}</h2>
                <div>
                <img src={props.fotoDaReceita} alt="Foto da Receita" class="image-main"/>
                </div>
                <div class="recipe-container">
                    <div class="ingredientes">
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
                    <div class="passo-a-passo">
                    <h3>Modo de Preparo</h3>
                    <ul>
                        <li>$1 Passo</li>
                        <li>$2 Passo</li>
                        <li>$3 Passo</li>
                    </ul>
                    </div>
                </div>
            <button id="reset-receita" class="reset-btn"><i class="fa-solid fa-arrows-rotate"></i></button>
        </section>
    )
}

export default Receita