const express = require('express')
const router = express.Router()

router.get('/',(request, response)=>{
    let arr = [
        {name: 'sairaj', roll: 31, clg: 'dkte'},
        {name: 'aj', roll: 42, clg: 'dkte'},
        {name: 'ha', roll: 31, clg: 'dkte'},
    ]
    response.send(arr)
})

module.exports = router