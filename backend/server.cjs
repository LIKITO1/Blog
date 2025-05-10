const express=require("express");
const app=express();
const mysql=require("mysql2")
const cors=require("cors")
app.use(cors())
const pool=mysql.createPool({
    host:"localhost",
    password:"lucas312@Lucas",
    user:"root",
    database:"blog"
})
app.get("/api",(req,res)=>{
    pool.query("SELECT * FROM posts",(err,valor)=>{
        res.send(valor)
    })
})
app.listen(5000)