const express = require('express')
const router = express.Router()

router.post('/',(req, res)=>{
    res.send("give me products data")
    req.body
})

module.exports = router;

