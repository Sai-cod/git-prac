const mysql = require("mysql2")
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "sunbeam_db"
})

module.exports = pool