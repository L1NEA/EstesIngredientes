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
                        <li>$Quantidade do 1 Ingrediente</li>
                        <li>$Quantidade do 2 Ingrediente</li>
                        <li>$Quantidade do 3 Ingrediente</li>
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