const express = require('express')
require("dotenv").config()
const postRouter = require("./routes/post_routes")

const app = express()

app.use(express.json())

app.use("/posts",postRouter)

app.use((req,res,err,next) =>{
    console.log(err)

    res.status(500).json(
        {
            "message" : "Operation Field..."
        }
    )
})
const  port = process.env.Port || 3000
app.listen(port,() => console.log(`node js app run in ${port}`))