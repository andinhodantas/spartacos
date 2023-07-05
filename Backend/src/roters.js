const express = require('express')
const {cadastrarExercicio} = require('../controllers/cadastrarExercicioController')
const {fazerCadastro} = require('../controllers/cadastrarUsuarioM')

const checkToken = require('../meddlewares/checkToken')

const router = express.Router()

const {fazerLogin} = require("../controllers/loginController")
const { cadastrarTreino } = require('../controllers/cadastrarTreinoController')
const { listarTreinoController } = require('../controllers/listartreinocontroller')

router.get('/usuario/validar',(req, res) =>{
    return res.status(200).json('Usuario logado')
})


router.get('/listarTreinos',checkToken, listarTreinoController)

router.post('/cadastrarUsuario', fazerCadastro)
 
router.post('/login', fazerLogin)

router.post('/cadastrarTreino', checkToken, cadastrarTreino)

router.post('/cadastrarExercicio', checkToken, cadastrarExercicio)

// validar o token
// se esse token for valido, retorna true
router.post('/validarToken', checkToken, (req, res) => {
    return res.status(200).json({tokenValido: true})
})

module.exports = router
