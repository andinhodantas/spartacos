const {cadastrarExercicio} = require('../models/exerciciomodel')

const exercicioController = async (req, res) => {
    const dados = req.body
    cadastrarExercicio(dados.nomeExercicio, dados.series, dados.repeticoes, dados.carga)
    return res.status(200).json('Exercicio cadastrado ')
}

module.exports = {exercicioController}