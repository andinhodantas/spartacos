
const cadastrarTreinomysql = require("../moldels/cadastrarTreinoModel")
const connection = require('../moldels/db')
const cadastrarTreino =  (req, res) => {
    const dados = req.body
    if (dados.treino) {
        cadastrarTreinomysql(dados.treino,dados.id)
    return res.status(200).json('Treino cadastrado')
    }
    else{
        return res.status(404).json("O campo está vazio")
        
    }
}

module.exports = {
    cadastrarTreino
}