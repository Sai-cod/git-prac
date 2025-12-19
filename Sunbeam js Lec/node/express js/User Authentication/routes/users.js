const express = require('express')
const jwt = require('jsonwebtoken')
const crypto = require('crypto-js')

const result = require('../utils/result')
const pool = require('../db/pool')
const secret = require('../utils/config')

const router = express.Router()

router.post('/signup',(req, res)=>{
    const {name, email, password, mobile} = req.body

    const sql = `INSERT INTO users(name, email, password, mobile) VALUES (?,?,?,?)`
    const hashedPassword = crypto.SHA256(password).toString()
    pool.query(sql, [name, email, hashedPassword, mobile],(error, data)=>{
        res.send(result.createResult(error, data))
    })
})

router.post('/signin', (req, res)=>{
    const {email, password} = req.body
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`
    const hashedPassword = crypto.SHA256(password).toString()

    pool.query(sql, [email, hashedPassword],(error, data)=>{
        if(data) {
            if(data.length == 0) {
                res.send(result.createResult("Invalid email or password"))
            }
            else {
                const userData = data[0]
                const payload = {
                    "email": userData.email,
                    "uid": userData.uid
                }
                const token = jwt.sign(payload, secret)
                const Data = {
                    "name": userData.name,
                    "mobile": userData.mobile,
                    "token": token
                }
                res.send(result.createResult(null, Data))
            }
        }
        else {
            res.send(result.createResult(error))
        }
    })
})

router.delete('/',(req, res)=>{
    const email = req.headers.email
    const sql = `DELETE FROM users WHERE email = ?`
    pool.query(sql,[email], (error, data)=>{
        res.send(result.createResult(error, data))
    })
})

module.exports = router