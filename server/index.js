const express = require("express");
const cors  = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/usersRoutes"); 

const app = express()
require("dotenv").config();

app.use(cors());
app.use(express.json())

app.use("/api/auth",userRoutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err.message) 
})

const server = app.listen(process.env.PORT,()=>{ 
    console.log(`Server Started on Port ${process.env.PORT}`)
})
