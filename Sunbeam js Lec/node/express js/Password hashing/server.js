const express = require('express')
const userRouter = require('./routes/users')
const app = express()

app.use(express.json())
app.use('/users', userRouter)

app.listen(3000,()=>{
    console.log("Server started at 3000");
})

