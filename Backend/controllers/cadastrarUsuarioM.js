const Usuario = require('../models/cadastrarUsuarioM')

const fazerCadastro = async (req, res) => {
    try {
        const cadastro = req.body;
        console.log(cadastro.email)
        
        const emailExist = await Usuario.find({ email: cadastro.email })
       
        return res.status(200).json(emailExist)


        // const response = await new Usuario(cadastro).save(); //Como o mongoose salva um documento

        // return res.status(200).json({error: false, msg: "Usuario Cadastrado"});
        } catch(err) {
            res.json({ error: true, message: err.message });
    }
}

module.exports = {fazerCadastro}
