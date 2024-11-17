import React from 'react';
import '../stylesCSS/box.css';

const Box = () => {
/* criando um conntainer principal */
/* e posteriormente a divisão das boxes sobre determinado assunto*/
  return (
    <div className='container-resources'>
      <h2 className='sectionTitle'>Este site foi projetado utilizando os seguintes recursos:</h2>
      <div className="container1">
        <div className="box">
          <div>
            <p className="titulo"><strong>Front-End</strong></p>
            <img src="front.jpg" alt="Front-End Logo" />
          </div>
        </div>
        <div className="box">
          <div>
            <p className="titulo"><strong>Processamento</strong></p>
            <img src="gemini.jpg" alt="GPT Logo" />
          </div>
        </div>
        <div className="box">
          <div>
            <p className="titulo"><strong>Back-End</strong></p>
            <img src="node.png" alt="Node Logo" />
          </div>
        </div>
      </div>
      <div className="logo1">
        <img src="usjt.jpg" alt="São Judas Logo" />
      </div>
    </div>
  );
};

export default Box;
