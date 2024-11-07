// Conexão com a API e EndPoint
require('dotenv').config();
const express = require('express');
const app = express();
const { connectAndCreateTableLogs, insertLog, selectLogs } = require('./criaTabela');
const { GoogleGenerativeAI } = require('@google/generative-ai')

// Função middleware
app.use(express.json());

// Chamar a função para conectar e criar a tabela
connectAndCreateTableLogs();

// Middleware para registrar logs
app.use(async (req, res, next) => {
  res.on('finish', async () => {
    const endpoint = req.originalUrl;
    const status = res.statusCode;
    const erro = res.statusCode >= 400 ? res.statusMessage : null;
    await insertLog(endpoint, status, erro);
  });
  next();
});

// RECEBIMENTO DE REQUISIÇÃO
app.get('/hello-world', (req, res) => {
  res.json({ mensagem: `Olá Mundo!!!, ${req.query.nome}` });
});

// Rota para consultar logs
app.get('/consultarLogs', async (req, res) => {
  try {
    const logs = await selectLogs();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar logs' });
  }
});

//Rota para conversar com o GEMINI
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

app.get('/pergunte-ao-gemini', async (req, res) => {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash'
  })
  const { prompt } = req.body
  const result = await model.generateContent(prompt)
  res.json({completion: result.response.text()})
})

// Escuta ativa de requisições na porta :3000
app.listen(3000, () => {
  console.log("Serviço correndo na porta localhost:3000");
});
