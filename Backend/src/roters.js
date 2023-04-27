const express = require('express')

const router = express.Router()

router.get('/usuario/validar',(req, res) =>{
    return res.status(200).json('Usuario logado')
})
module.exports = router
