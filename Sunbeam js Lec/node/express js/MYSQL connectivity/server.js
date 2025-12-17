const express = require('express')
const app = express()
const useRouter = require('./routes/use')
app.use(express.json())
app.use('/use', useRouter)


app.listen(4000, 'localhost', ()=>{
    console.log("Server has started at 4000");
    
})