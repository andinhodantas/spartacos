const express = require('express')

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


router.post('/cadastrarTreino', (req, res) => {
    const dados = req.body
    console.log(dados)
    return res.status(200).json('Ok')
})
router.post('/cadastrarExercicio', (req, res) => {
    const dados = req.body
    console.log(dados)
    return res.status(200).json('Exercicio cadastrado ')
})

module.exports = router
