const jwt = require('jsonwebtoken')

require('dotenv').config({ path: '../.env' })

const chaveSecreta = process.env.CHAVESECRETA

// barrar ou deixar acessar a rota
const checkToken = async (req, res, next) => {
    const validar = await req.headers.authorization

    if (!validar) {
        return res.status(401).json({msg: "necessario ter um token"})
    }
    // alem da chave esta vindo o nome "Bearer"
    // vamos separar ele da nossa chave, transformando em um array
    // e pegando a segunda posição, que é onde esta nossa chave
    const token = validar.split(' ')[1]

    if (!token) {
        return res.status(401).json({msg: "necessario ter um token"})
    }

    try {
         // se token nao estiver vazio. Nos vamos verificar se ele é valido
        jwt.verify(token, chaveSecreta)
        return next()
    }
    catch (erro) {
        return res.status(401).json({msg: "token invalido"})
    }

}

module.exports = checkToken