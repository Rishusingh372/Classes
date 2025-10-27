const express = require ('express');
const cors = require ('cors');
const app = express ();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.use (cors ());

app.get('/home',(req,res)=>{
    res.send('Hello from the backend!');
})

app.post('/data',(req,res)=>{
    res.send('Data received successfully!');
    const {name,age} = req.body;
    console.log(name,age);

});

app.listen (5000, () => {
  console.log ('Server is running on port 5000');
});