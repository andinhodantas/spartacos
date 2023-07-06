const jwt = require('jsonwebtoken')
const loginmodel = require('../models/loginModel')

require('dotenv').config({ path: '../.env'})

const chaveSecreta = process.env.CHAVESECRETA

const fazerLogin =async (req, res) => {
    const dados = req.body
    const login = await loginmodel(dados.email,dados.senha)
    
    // verificar se esta vazio
    // consultar o banco
    // se existir esee login, vamos criar um token
    
    if (login != null) {
        // criar o token
        
        // estamos passando o id manualmente. Deve ser um id vindo do banco
        const token = jwt.sign({id: login.id}, chaveSecreta, {
            // expiresIn: 600 // 10 min
            expiresIn: '1d' // expira em 1 dia
        })
        
        
        return res.status(200).json({
            msg: "usuario logado", 
            token: token, 
            // substituir pelo id do usuario vindo do banco
            idUsuarioLogado: login.id
        })
    }
    else {
        return res.status(404).json("usuario nao encontrado")
    }
    
}



module.exports = {
    fazerLogin,
    
    
}