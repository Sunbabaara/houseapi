const express = require("express");
require("dotenv").config()
const connectDB = require("./config/connectDB")
const houseRoute =require("./routes/houseRoute")
const cors =require("cors")


connectDB()
const app =express()

//middleware
app.use(express.json())
app.use(cors())
app.use("/api", houseRoute)


app.get("/", (req,res)=>{
    res.json("Welcome to house api")
})

const PORT = 7000



app.listen(PORT, ()=>{
    console.log("server is running");
})