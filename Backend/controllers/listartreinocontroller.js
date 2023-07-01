
const listarTreino = require("../moldels/listarTreino")

const listarTreinoController = async (req, res) => {
    try{
     const listar = await listarTreino()
    return res.status(200).json(listar)
}catch(error){
    throw Error(error)
}
    
}

module.exports = {
    listarTreinoController
}