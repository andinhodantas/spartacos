const connection = require('./db')
const listarTreino =  async(id) => {
    const string = `select  nome from treino where id_usuario = "${id}";`
         const usuario = await connection.execute(string) 
         return usuario[0]
}
// listarTreino()

module.exports = listarTreino