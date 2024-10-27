require('dotenv').config();

const mysql = require('mysql2');

// Funcao para conectar ao MySQL e criar uma tabela
async function connectAndCreateTable() {

  // Configurações de conexao com o banco de dados
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  // conectar ao banco de dados
  connection.connect((err) => {
    if (err) {
      return console.error('Erro ao conectar: ' + err.stack)
    }

    // query para criar a tabela
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS logs (
        id BIGINT(20) AUTO_INCREMENT PRIMARY KEY ,
        comando LONGTEXT NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
        retorno LONGTEXT NOT NULL COLLATE 'utf8mb4_uca1400_ai_ci',
        criadoEm TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      )
    `

    connection.query(createTableQuery, (err, results) => {
      if (err) {
        console.error('Erro ao criar tabela: ' + err.message)
      } else {
        console.log('Tabela criada ou já existe:', results)
      }

      // Fechar a conexao
      connection.end()
    })
  })
}

