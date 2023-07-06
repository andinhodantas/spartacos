const connection = require('./db')

const cadastrarUsuario = async(nome,email,senha) =>{
    try {
        const usuario = `INSERT INTO spartacos.usuario ( nome, email, senha) VALUES ("${nome}", "${email}","${senha}" )`
        await connection.execute(usuario)
   }
   catch (error) {
       console.log(error.sqlMessage)
   } 
}

//cadastrarUsuario("day" ,"day@hotmail.com","day123")


module.exports  = cadastrarUsuario