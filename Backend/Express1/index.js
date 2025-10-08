const express = require ('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("<h1>Hello World ! Welcome to Express JS</h1>")
})

app.get('/home',(req,res)=>{
    res.send("THis is my Home Page !.....")
})
app.get('/service',(req,res)=>{
    res.send("THis is my service  !.....")
})
app.get('/contact',(req,res)=>{
    res.send("THis is my contact service !.....")
})



app.listen(8000,()=>{
    console.log ("Server created ....")
})