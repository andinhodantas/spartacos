const fazerLogin = (req, res) => {
    const dados = req.body
    console.log(dados)
    // verificar se esta vazio
    // consultar o banco
    // se existir esee login, vamos criar um token

    if (dados.email == "claudio" && dados.senha == 123) {
        return res.status(200).json('Ok')
    }
    else {
        return res.status(404).json("usuario nao encontrado")
    }
}


module.exports = {
    fazerLogin
}