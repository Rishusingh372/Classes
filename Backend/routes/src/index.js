const express = require('express');
const app = express();

const mongoose = require('mongoose');

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

// params
app.get('/user/:name/:contact', (req, res) => {
   res.send("working")
   console.log(req.params);
});

// query
app.get('/demo', (req, res) => {
   res.send("working")
   console.log(req.query);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}); 