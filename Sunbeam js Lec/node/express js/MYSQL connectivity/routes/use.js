const express = require('express')
const router = express.Router()
const pool = require('../db/pool')
const result = require("../utils/result")

// get methood
router.get('/',(req, res)=>{
    const sql = `SELECT * FROM users`
    pool.query(sql,(error, data)=>{
        res.send(result.createResult(error, data))
    })
})

//post method
router.post('/',(req, res)=>{

    const {email, password, role} = req.body
    const sql = `INSERT INTO users(email, password, role) VALUES (?,?,?)`
    pool.query(sql,[email, password, role],(error, data)=>{
        res.send(result.createResult(error, data))
    })

})

router.put('/', (req, res)=>{
    const {pass} = req.body
    const sql = `UPDATE users SET password = ? WHERE email = "abc@gmail.com"`
    pool.query(sql,[pass],(error, data)=>{
        res.send(result.createResult(error, data))
    })
})

router.delete('/', (req, res)=>{
    const {email} = req.body
    const sql = `DELETE FROM users WHERE email = "?"`
    pool.query(sql,[email],(error, data)=>{
        res.send(result.createResult(error, data))
    })
})

module.exports = router