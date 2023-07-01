const connection = require('./db')
const listarTreino =  async() => {
    const string = `select distinct nome from treino`
         const usuario = await connection.execute(string) 
         return usuario[0]
}
// listarTreino()

module.exports = listarTreino