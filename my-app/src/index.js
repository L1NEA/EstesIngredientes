// Recursos do React e Node.
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação de arquivos de estilo.   
import './front/globalStyles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importação das outras funções.
import Main from './front/Inicial/scriptsJS/main.js';
import MenuBar from './front/Inicial/scriptsJS/menuBar.js';
import Historico from './front/Inicial/scriptsJS/historico.js';

// Função principal.
const App = () => {
  return (
    <Router>
      <div>
        <MenuBar />
        <Routes>
          {/* Rota para a tela inicial */}
          <Route path="/" element={<Main />} />
          
          {/* Rota para a tela Todas as Receitas */}
          <Route path="/todas-as-receitas" element={<Historico />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
