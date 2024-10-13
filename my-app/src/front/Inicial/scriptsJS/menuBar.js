//Função da barra de menu.
import '../stylesCSS/menuBar.css';

const MenuBar = () => {
    const menu1 = "Gerar Receita"

    const menu2 = "Todas as receitas"

    const handleMenuClick = (path) => {
      window.location.href = path;
  };


    const menu2 = "Meu histórico de receitas"
    const menu3 = "Todas as receitas"
  
    return (
      <header>
        <nav className="menuBar">
          <ul>
            <li>
              <div className="logo">
                <a href="#">
                  <img src="LogoNome.png" alt="Logo do Site" />
                </a>
              </div>
            </li>
            <li className="link"><a href="#">{menu1}</a></li>
            <li className="link"><a href="#">{menu2}</a></li>
            <li className="link"><a href="#">{menu3}</a></li>
          </ul>
        </nav>
      </header>
    );
  };

export default MenuBar