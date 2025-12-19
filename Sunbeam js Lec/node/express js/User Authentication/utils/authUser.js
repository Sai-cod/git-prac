const jwt = require('jsonwebtoken')

const result = require('../utils/result')
const secret = require('../utils/config')
function authUser(req, res, next) {
    const path = req.url
    if(path == '/users/signin' || path == '/users/signup') {
        next()
    }
    else{
        const token = req.headers.token
        if(!token) {
            res.send(result.createResult("Token is missing"))
        }
        else {
            try{
                const payload = jwt.verify(token, secret)
                req.headers.email = payload.email
                req.header.uid = payload.uid
                next()
            }catch(ex) {
                res.send(result.createResult("Invalid Token"))
            }
        }
    }
}

module.exports = authUser