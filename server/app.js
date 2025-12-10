import express from "express"
import dotenv from "dotenv"
dotenv.config()
import userRouter from "./controller/user/index.js"
import "./utlis/dbconnect.js"
let port=process.env.PORT
const app= express()
app.use(express.json())


app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"hii"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.use("/user",userRouter)
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})