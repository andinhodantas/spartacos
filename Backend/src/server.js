const express = require('express')
const app = express()
const port = 3000

// criar banco
const create = require('../moldels/createDataBase')
create()


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/backend')

const cors = require('cors')
app.use(cors())
app.use(express.json())

const router = require('./roters')
app.use(router)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
