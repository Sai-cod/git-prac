const mysql = require('mysql2')
const pool = mysql.createPool({
    user: "root",
    host: 'localhost',
    password: 'manager',
    database: "sunbeam_test_db"
})

module.exports = pool