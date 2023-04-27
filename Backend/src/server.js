const router = require('./roters')

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())
app.use(router())

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})