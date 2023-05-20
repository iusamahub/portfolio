require('dotenv').config();
const mongoose = require("mongoose");

// const DB = process.env.DATABASE;

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=>console.log("DATABASE CONNECTED")).catch((err)=>{
    console.log(err)
})