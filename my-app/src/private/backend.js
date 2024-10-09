// Conexão com a API e EndPoint
require('dotenv').config()
const app = require('express')()
const { OpenAI } = require('openai')

// Função middleware
app.use(express.json())

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
console.log(OPENAI_API_KEY)

//POST /pergunte-ao-chatgpt () => {}
// ENVIO DE REQUISIÇÃO
app.post('/pergunte-ao-chatgpt', (req, res) => {
    const openai = new OpenAI(OPENAI_API_KEY)
    res.json({mensagem: 'Ok'})
})

//GET /ingredientes-receita () => {}
// RECEBIMENTO DE REQUISIÇÃO
app.get('/oi', (req, res) => {
    res.json({mensagem: 'oi, $(req.query.nome)'})
})

// Escuta ativa de requisições na porta :3000
app.listen(3000, () => {console.log("Serviço correndo.")})

// Pacote API Chat GPT = npm i openai