// Conexão com a API e EndPoint
require('dotenv').config();
const express = require('express');
const app = express();
const { connectAndCreateTableLogs, insertLog, selectLogs, salvarReceitaNoBanco } = require('./criaTabela');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');

// Função middleware
const PORT = 3001
// Middleware para habilitar CORS
app.use(cors());
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
app.get('/', (req, res) => {
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

// Rota para consultar receitas
app.get('/consultarReceitas', async (req, res) => {
  try {
    const receitas = await selectReceitas();
    res.json(receitas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar receitas' });
  }
});

//Rota para conversar com o GEMINI
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

app.post('/pergunte-ao-gemini', async (req, res) => {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash'
  });
  const { prompt } = req.body; // Acessando o prompt do corpo da requisição POST
  console.log('API KEY:', GEMINI_API_KEY)
  console.log('Prompt recebido:', prompt)
  const result = await model.generateContent(prompt);
  const completionText = result.response.text();
  console.log('Texto de conclusão:', completionText);
  
  // Remover a marcação de código Markdown (caso esteja presente)
  const jsonString = completionText.replace(/```json|```/g, '').trim();

  // Tentar parsear o JSON
  let responseJson;
  try {
    responseJson = JSON.parse(jsonString); // Convertendo a string para JSON
  } catch (error) {
    console.error('Erro ao converter completionText para JSON:', error);
    return res.status(500).json({ error: 'Erro ao processar a resposta do modelo' });
  }

  // Agora, salvar esses dados no banco
  const { nome, ingredientes, passos } = responseJson;

  // Chama a função para salvar os dados da receita no banco
  salvarReceitaNoBanco(nome, ingredientes, passos);
  res.json({ completion: completionText });
});

// Escuta ativa de requisições na porta :3001
app.listen(PORT, () => {
  console.log(`Serviço correndo na porta localhost: ${PORT}`);
});
