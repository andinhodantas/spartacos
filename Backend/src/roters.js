const express = require('express')

const router = express.Router()

router.get('/usuario/validar',(req, res) =>{
    return res.status(200).json('Usuario logado')
})


router.post('/cadastrarUsuario', (req, res) => {
    const dados = req.body
    console.log(dados)
    return res.status(200).json('Ok')
})


router.post('/login', (req, res) => {
    const dados = req.body
    console.log(dados)
    return res.status(200).json('Ok')
})


router.post('/cadastrarTreino', (req, res) => {
    const dados = req.body
    console.log(dados)
    return res.status(200).json('Ok')
})

module.exports = router
