const mongoose = require('./mongosee')
const express = require('express')
const app = express()
const port = 3000
app.get('/movies', function(req , res){
    res.send("hello world")
})

app.get('/user', function(req , res){
  res.send({title:"hello world"})
})
app.listen(port, function(){
    console.log(`App listening at http://localhost:${port}`)
})