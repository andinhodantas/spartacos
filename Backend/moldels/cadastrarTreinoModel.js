

const connection = require('./db')
const cadastrarTreinomysql =  async(treino,id) => {
    
         const usuario = await connection.execute(`INSERT INTO spartacos.treino ( nome, id_usuario) VALUES ("${treino}", "${id}");`)  
}

//  cadastrarTreinomysql("treino2")
module.exports = cadastrarTreinomysql