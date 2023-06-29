const connection = require('./db')
const loginmodel =  async(email,senha) => {
    const string = `select id,email,senha from usuario where email="${email}"
    and senha="${senha}"`
         const usuario = await connection.execute(string)  
         return usuario[0][0]
}
// loginmodel("teste@gmail","123")

module.exports = loginmodel