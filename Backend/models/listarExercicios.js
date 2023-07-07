const connection = require('./db');

const listarExercicios = async (idUsuario) => {
  try {
    const query = 
    `SELECT treino.nome AS Nome_Treino,
    GROUP_CONCAT(exercicios.nome) AS Nomes_Exercicios,
    GROUP_CONCAT(treino_exercicios.carga) AS Cargas,
    GROUP_CONCAT(treino_exercicios.repeticoes) AS Repeticoes,
    GROUP_CONCAT(treino_exercicios.serie) AS Series
    FROM treino
    JOIN treino_exercicios ON treino.id = treino_exercicios.id_treino
    JOIN exercicios ON exercicios.id = treino_exercicios.id_exercicios
    WHERE treino.id_usuario = ?
    GROUP BY treino.nome`;

    const [result] = await connection.execute(query, [idUsuario]);
    return result;
    
  } catch (error) {
    console.log(error.sqlMessage)
  } 
};

module.exports = listarExercicios;
