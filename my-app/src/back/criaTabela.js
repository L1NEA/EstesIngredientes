require('dotenv').config();
const mysql = require('mysql2');

// Função para conectar ao MySQL e criar uma tabela
async function connectAndCreateTableLogs() {
  // Configurações de conexão com o banco de dados
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
  });

  // Conectar ao banco de dados
  connection.connect((err) => {
    if (err) {
      return console.error('Erro ao conectar: ' + err.stack);
    }

    // Query para criar a tabela
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS logs (
        id BIGINT(20) AUTO_INCREMENT PRIMARY KEY,
        endpoint VARCHAR(255) NOT NULL,
        status INT NOT NULL,
        erro TEXT,
        criadoEm TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    connection.query(createTableQuery, (err, results) => {
      if (err) {
        console.error('Erro ao criar tabela: ' + err.message);
      } else {
        console.log('Tabela criada ou já existe:', results);
      }
      // Fechar a conexão
      connection.end();
    });
  });
}

// Função para inserir dados na tabela
async function insertLog(endpoint, status, erro = null) {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
  });

  connection.connect((err) => {
    if (err) {
      return console.error('Erro ao conectar: ' + err.stack);
    }

    const insertQuery = 'INSERT INTO logs (endpoint, status, erro) VALUES (?, ?, ?)';
    connection.query(insertQuery, [endpoint, status, erro], (err, results) => {
      if (err) {
        console.error('Erro ao inserir dados: ' + err.message);
      } else {
        console.log('Dados inseridos com sucesso:', results);
      }
      connection.end();
    });
  });
}

// Função para selecionar dados da tabela
async function selectLogs() {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    connection.connect((err) => {
      if (err) {
        return reject('Erro ao conectar: ' + err.stack);
      }

      const selectQuery = 'SELECT * FROM logs';
      connection.query(selectQuery, (err, results) => {
        if (err) {
          reject('Erro ao selecionar dados: ' + err.message);
        } else {
          resolve(results);
        }
        connection.end();
      });
    });
  });
}

async function salvarReceitaNoBanco(nome, ingredientes, preparo) {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
  });

  connection.connect((err) => {
    if (err) {
      return console.error('Erro ao conectar: ' + err.stack);
    }

    const query = 'INSERT INTO receitas (nome, ingredientes, preparo) VALUES (?, ?, ?)';
    const ingredientesJson = JSON.stringify(ingredientes);
    const preparoJson = JSON.stringify(preparo);

    connection.query(query, [nome, ingredientesJson, preparoJson], (err, result) => {
      if (err) {
        console.error('Erro ao salvar receita no banco:', err);
      } else {
        console.log('Receita salva no banco de dados com sucesso:', result);
      }
      connection.end();
    });
  });
}

// Função para selecionar dados da tabela receitas
async function selectReceitas() {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });

    connection.connect((err) => {
      if (err) {
        return reject('Erro ao conectar: ' + err.stack);
      }

      const selectQuery = 'SELECT nome, ingredientes, preparo FROM receitas';
      connection.query(selectQuery, (err, results) => {
        if (err) {
          reject('Erro ao selecionar dados: ' + err.message);
        } else {
          resolve(results);
        }
        connection.end();
      });
    });
  });
}

module.exports = {
  connectAndCreateTableLogs,
  insertLog,
  selectLogs,
  salvarReceitaNoBanco,
  selectReceitas
};