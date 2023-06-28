const jwt = require('jsonwebtoken')
const Login = require('../models/loginModelMongo')

require('dotenv').config({ path: '../.env'})

const chaveSecreta = process.env.CHAVESECRETA

const fazerLogin = async (req, res) => {
    const dados = req.body
    console.log(dados)
    // verificar se esta vazio
    // consultar o banco
    // se existir esee login, vamos criar um token

    if (dados.email == "claudio" && dados.senha == 123) {
        // criar o token

        // estamos passando o id manualmente. Deve ser um id vindo do banco
        const token = jwt.sign({id: 1}, chaveSecreta, {
            // expiresIn: 600 // 10 min
            expiresIn: '1d' // expira em 1 dia
        })
        return res.status(200).json({
            msg: "usuario logado", 
            token: token, 
            // substituir pelo id do usuario vindo do banco
            idUsuarioLogado: 1
        })
    }
    else {
        return res.status(404).json("usuario nao encontrado")
    }
}


module.exports = {fazerLogin}