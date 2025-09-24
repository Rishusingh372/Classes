const express = require('express');
const app = express();
const model = require('./model');
const mongoose = require('mongoose');

// middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded());


// database
mongoose.connect('mongodb://localhost:27017/test1')
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
app.post('/add',(req,res)=>{
  const {name,age,contact}=req.body;
    const newUser=new model({
    name,age,contact
    })
    newUser.save()
    res.send("data added")
});

// get data
app.get('/get', async(req,res)=>{
  const users= await model.find()
  res.json(users)
});



app.listen(3200, () => {
  console.log('Server is running on http://localhost:3200');
}); 