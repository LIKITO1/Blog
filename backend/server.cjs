const express=require("express");
const app=express();
const mysql=require("mysql2")
const cors=require("cors")
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
app.use(express.json())
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
app.post("/publicar",(req,res)=>{
    pool.query(`INSERT INTO posts(src,description) VALUES(${req.body?.link},${req.body?.description})`,(err,retorno)=>{
        if(err)console.log(err);
    })
})
app.listen(5000)