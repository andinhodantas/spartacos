const express = require('express')
const {exercicioController} = require('../controllers/exercicioController')
const {fazerCadastro} = require('../controllers/cadastrarUsuarioM')

const checkToken = require('../meddlewares/checkToken')

const router = express.Router()

const {fazerLogin} = require("../controllers/loginController")

router.get('/usuario/validar',(req, res) =>{
    return res.status(200).json('Usuario logado')
})


router.post('/cadastrarUsuario', fazerCadastro)

router.get('/moroni', async(req, res) => {
    n = await Filme.find({
        //Filtro => titulo: 'Filme Teste 1', 
    })
    return  res.status(200).json(n)
})

 
router.post('/login', fazerLogin)


router.post('/cadastrarTreino', checkToken, (req, res) => {
    const dados = req.body
    console.log(dados)
    return res.status(200).json('Ok')
})

router.post('/cadastrarExercicio', checkToken, exercicioController)

// validar o token
// se esse token for valido, retorna true
router.post('/validarToken', checkToken, (req, res) => {
    return res.status(200).json({tokenValido: true})
})

module.exports = router
