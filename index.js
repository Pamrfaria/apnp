const express = require('express')
const app = express()

app.get("/",function(rec,res){
    res.send("Olá Pamela!")    
})

app.listen(3000,function(){
    console.log("conexão inicial na porta 3000")
})