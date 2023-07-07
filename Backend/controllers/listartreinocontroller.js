
const listarTreino = require("../models/listarTreino")

const listarTreinoController = async (req, res) => {
    try{
        const id = req.body.id
     
        const listar = await listarTreino(id)
        return res.status(200).json(listar)
    }
    catch(error){
        return res.status(500).json({msg: 'erro no servidor'})
    }
    
}

module.exports = {
    listarTreinoController
} 