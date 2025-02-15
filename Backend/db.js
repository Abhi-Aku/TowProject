const mongoose=require('mongoose')


 mongoose.connect(process.env.MONGODB_UR, {
    useNewUrlParser:true,
    useUnifiedTopology:true
 })
 const db =mongoose.connection;
 
 db.on("connected",()=>{
    console.log("connected to database")
 })
 db.on("error",(err)=>{
    console.log(err)
 })


  module.exports =db;