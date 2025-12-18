const express = require("express")
const pool = require("../db/pool")
const result = require("../utils/result")
const crypto = require('crypto-js')
const router = express.Router()



router.post('/signup', (req, res)=>{
    const {name, email, password, mobile} = req.body
    const sql = `INSERT INTO users(name, email, password, mobile) VALUES (?,?,?,?)`
    const hashedPassword = crypto.SHA256(password).toString()

    pool.query(sql, [name, email, hashedPassword, mobile], (error, data)=>{
        res.send(result.createResult(error, data))
    })
})

router.post('/signin', (req, res)=>{
    const {email, password} = req.body
    const hashedPassword = crypto.SHA256(password).toString()
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`

    pool.query(sql, [email, hashedPassword],(error, data)=>{
        if(data) {
            if(data.length == 0) {
                res.send(result.createResult("Invalid password or email"))
            }
            else {
                res.send(result.createResult(null, data))
            }
        }
        else{
            
            res.send(result.createResult(error))
        }
    })
})

module.exports = router