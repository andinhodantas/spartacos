const cadastrarUsuario = require("../moldels/cadastrarUsuario")

const cadastrarUsuarioC = async (req, res) => {
    try{
        const dados = req.body;
        
        await cadastrarUsuario (dados.nome ,dados.email, dados.senha)
        return res.status(200).json({msg:'sucesso'})
    }
    catch(error){
        return res.status(500).json({msg: 'erro no servidor'})
    }
    
}

module.exports = {
    cadastrarUsuarioC
}