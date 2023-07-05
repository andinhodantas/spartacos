const connection = require('./db')
const listarTreino =  async() => {
    try {
        const string = `select distinct nome from treino`
        const usuario = await connection.execute(string) 
        return usuario[0]
    }
    catch(error) {
        console.log(error.sqlMessage)
    }
}
// listarTreino()

module.exports = listarTreino