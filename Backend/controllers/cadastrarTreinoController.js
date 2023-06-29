
const cadastrarTreinomysql = require("../moldels/cadastrarTreinoModel")
const connection = require('../moldels/db')
const cadastrarTreino =  (req, res) => {
    const dados = req.body
    console.log(dados)
    if (dados.treino) {
        console.log(dados)
        cadastrarTreinomysql(dados.treino)
    return res.status(200).json('Treino cadastrado')
    }
    else{
        return res.status(404).json("O campo está vazio")
        
    }
}

module.exports = {
    cadastrarTreino
}