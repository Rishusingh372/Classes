const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs'); 

app.get('/',(req,res)=>{
    res.render('home');
});
app.get('/about',(req,res)=>{
    res.render('about');
});

// Get the data from the form
app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.listen(3340,()=>{
    console.log("Server started at port 3340 ");
});


