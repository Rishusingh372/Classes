const express = require('express');
const app = express();
const model = require('./model');
const mongoose = require('mongoose');

// middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded());

// database
mongoose.connect('mongodb://localhost:27017/testdb')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// insert data
app.post('add',(req,res)=>{
  const {name,age,contact}=req.body;
  const newUser=new model({
    name,age,contact
  })
  newUser.save()
  res.send("data added")
})
  
// // params
// app.get('/user/:name/:contact', (req, res) => {
//    res.send("working")
//    console.log(req.params);
// });

// // query
// app.get('/demo', (req, res) => {
//    res.send("working")
//    console.log(req.query);
// });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}); 