
const listarTreino = require("../models/listarTreino")

const listarTreinoController = async (req, res) => {
    try{
        const id = req.body.id
     const listar = await listarTreino(id)
    return res.status(200).json(listar)
}catch(error){
    throw Error(error)
}
    
}

module.exports = {
    listarTreinoController
}