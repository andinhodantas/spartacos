const connection = require('./db')

const listarTreino =  async(id) => {
    try {
        const string = `select  nome from treino where id_usuario = "${id}";`
        const usuario = await connection.execute(string) 
        return usuario[0]
    }
    catch(error) {
        console.log(error.sqlMessage)
    }

}
// listarTreino()

module.exports = listarTreino