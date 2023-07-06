const connection = require('./db')

const cadastrarTreinomysql =  async(treino,id) => {
    try {
         const usuario = `INSERT INTO spartacos.treino ( nome, id_usuario) VALUES ("${treino}", "${id}")`
         await connection.execute(usuario)
    }
    catch (error) {
        console.log(error.sqlMessage)
    }  
}

//  cadastrarTreinomysql("treino2")
module.exports = cadastrarTreinomysql