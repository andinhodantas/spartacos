
const mysql = require('mysql2/promise');


const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "po2207s2q",
    database: 'spartacos',
    port:3307
})
module.exports = connection