
const listarTreino = require("../moldels/listarTreino")

const listarTreinoController = async (req, res) => {
    try{
        const listar = await listarTreino()
        return res.status(200).json(listar)
    }
    catch(error){
        return res.status(500).json({msg: 'erro no servidor'})
    }
    
}

module.exports = {
    listarTreinoController
} 