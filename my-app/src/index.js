// Recursos do React e Node.
import React from 'react';
import ReactDOM from 'react-dom';

// Importação de arquivos de estilo.   
import './front/globalStyles.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

// Importação das outras funções.
import Main from './front/Inicial/scriptsJS/main.js'
import MenuBar from './front/Inicial/scriptsJS/menuBar.js'
import Box from './front/Inicial/scriptsJS/box.js'

// Função principal.
const App = () => {
  return (
    <div>
      <div>
        <MenuBar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);