const cadastrarExerciciomysql = require("../models/cadastrarexercicioModel")

const cadastrarExercicio = async (req, res) => {

    try {
        const dados = req.body
        const insert = await cadastrarExerciciomysql(dados.treino, dados.nome, dados.carga, dados.rep, dados.serie, dados.idUsuario)
        
        if (insert == 1062) {
            return res.status(500).json({msg: 'Exercicio já cadastrado'})         
        }
        return res.status(201).json({msg: 'Exercicio cadastrado'})
    } catch (error){
        return res.status(500).json({msg: 'erro no servidor'})
    }
}

module.exports = {
    cadastrarExercicio
}
