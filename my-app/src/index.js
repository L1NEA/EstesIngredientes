// Recursos do React e Node.
import React from 'react';
import ReactDOM from 'react-dom';

// Importação de arquivos de estilo.   
import './styles/globalStyles.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

// Importação das outras funções.
import Main from './scripts/main.js'
import MenuBar from './scripts/menuBar.js'
import Box from './scripts/box.js'

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
      <div>
        <Box />
      </div>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);