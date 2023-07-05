const mysql = require('mysql2/promise');

require('dotenv').config({ path: '../.env'})


const connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
})

module.exports = connection