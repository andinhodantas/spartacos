const listarExercicios = require('../models/listarExercicios');

const listarExerciciosController = async (req, res) => {
  try {
    const id = req.body.id
    const listar = await listarExercicios(id);
    res.json(listar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'erro no servidor' });
  }
};

module.exports = {
  listarExerciciosController
};