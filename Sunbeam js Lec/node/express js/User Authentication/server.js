const express = require('express')
const app = express()

const userRouter = require('./routes/users')
const authUser = require('./utils/authUser')

app.use(express.json())
app.use(authUser)
app.use('/users', userRouter)



app.listen(3000, 'localhost',()=>{
    console.log("Server has started at 3000");
})