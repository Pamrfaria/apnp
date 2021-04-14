const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cookieParser = require ('cookie-parser')
var path = require('path')

app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine","ejs")

app.use(express.static(path.join(__dirname,"public")))

app.get("/usuarios",function(rec,res){
    res.render('usuarios.ejs',{usuarios:[
        {nome:'Pamela',email:'pamela096@gmail.com'},
        {nome:'Paulo',email:'paulo125@gmail.com'},
        {nome:'Marcia',email:'marcia123@gmail.com'},
        {nome:'Andrio',email:'andrio675@gmail.com'}
    ]})    
})
app.get("/",function(rec,res){
    res.render('index.ejs',{})    
})

app.listen(3000,function(){
    console.log("conexão iniciada")
})