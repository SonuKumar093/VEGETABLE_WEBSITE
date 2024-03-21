const express=require("express")
//express
const cors=require("cors")
const mongoose =require("mongoose")
const app=express()
app.use(cors())
const PORT=process.env.PORT||8081
app.get("/",(req,res)=>{
    res.send("server is runnig")
})
app.post("/signup",(req,res)=>{
    console.log(req.body)
})
app.listen(PORT,()=>console.log("server is running at port:"+PORT))
