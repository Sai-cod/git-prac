const express = require("express")
const app = express()
const userRouter = require("./routes/user")
const productRouter = require("./routes/products")

app.use('/user',userRouter)
app.use('/products',productRouter)

app.listen(4000,'localhost',()=>{
    console.log("Server started at port 4000");
})