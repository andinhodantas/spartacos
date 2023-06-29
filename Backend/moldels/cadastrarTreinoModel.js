
const connection = require('./db')
const cadastrarTreinomysql =  async(treino) => {
         const usuario = await connection.execute(`INSERT INTO spartacos.treino ( nome, id_usuario) VALUES ("${treino}", '1');`)  
}

//  cadastrarTreinomysql("treino2")
module.exports = cadastrarTreinomysql