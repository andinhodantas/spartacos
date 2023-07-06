const connection = require('./db')

const cadastrarExerciciomysql =  async(treino, nome, carga, rep, serie, idUsuario ) => {
    try {
    
        // Inserir um exercício
        const exercicio = `INSERT INTO spartacos.exercicios (nome) VALUES ("${nome}")`
        await connection.execute(exercicio)

        //Descobrir qual Id do exercício criado
       const x = `SELECT id FROM exercicios where nome = "${nome}"`
        const idExercicio = await connection.execute(x)

        //Descobrir Id do exercício escolhido
        const a = `SELECT id from spartacos.treino where nome = "${treino}"`
        const idTreino = await connection.execute(a)

        //Pegar todos os valores e inserir na tebela Treino_Exercicio
        const treinoExercicio = `INSERT INTO spartacos.treino_exercicios 
        (carga, repeticoes, serie, id_treino, id_usuario, id_exercicios) VALUES 
        (${carga}, ${rep}, ${serie}, ${idTreino[0][0].id}, ${idUsuario}, ${idExercicio[0][0].id}) `

        await connection.execute(treinoExercicio)

    }
    catch (error) {
        return error.errno
    }  
}



//  cadastrarTreinomysql("treino2")
module.exports = cadastrarExerciciomysql