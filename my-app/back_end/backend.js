// Conexão com a API e EndPoint
require('dotenv').config()
const app = require('express')()

// Função middleware
app.use(express.json())

// RECEBIMENTO DE REQUISIÇÃO
app.get('/hello-world', (req, res) => {
    res.json({mensagem: 'Olá Mundo!!!, $(req.query.nome)'})
})

// Escuta ativa de requisições na porta :3000
app.listen(3000, () => {console.log("Serviço correndo.")})
