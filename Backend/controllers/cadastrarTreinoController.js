const cadastrarTreinomysql = require("../moldels/cadastrarTreinoModel")

const cadastrarTreino = (req, res) => {

    try {
        const dados = req.body

        if (dados.treino && dados.id) {
            cadastrarTreinomysql(dados.treino, dados.id)

            return res.status(200).json({msg: 'Treino cadastrado'})
        }
        else{
            return res.status(500).json({msg: "O campo está vazio"})
            
        }
    }
    catch (error){
        return res.status(500).json({msg: 'erro no servidor'})
    }
}

module.exports = {
    cadastrarTreino
}