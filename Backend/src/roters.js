const express = require('express')

const checkToken = require('../meddlewares/checkToken')


const router = express.Router()

const {fazerLogin} = require("../controllers/loginController")

router.get('/usuario/validar',(req, res) =>{
    return res.status(200).json('Usuario logado')
})


router.post('/cadastrarUsuario', (req, res) => {
    const dados = req.body
    console.log(dados)
    return  res.status(200).json('Ok')
})

 
router.post('/login', fazerLogin)


router.post('/cadastrarTreino', checkToken, (req, res) => {
    const dados = req.body
    console.log(dados)
    return res.status(200).json('Ok')
})
router.post('/cadastrarExercicio', checkToken, (req, res) => {
    const dados = req.body
    console.log(dados)
    return res.status(200).json('Exercicio cadastrado ')
})

// validar o token
// se esse token for valido, retorna true
router.post('/validarToken', checkToken, (req, res) => {
    return res.status(200).json({tokenValido: true})
})

module.exports = router
