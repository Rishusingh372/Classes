const express = require ('express');
const cors = require ('cors');
const app = express ();
const bodyParser = require('body-parser');
const empController = require ('./routes/empRoutes');
const mongoose = require("mongoose")
require("dotenv").config();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/employees',empController);

// middleware example
app.get("/home" , (req,res)=>{
    res.send("This is Home Route");
    console.log("Home route middleware");
})
app.get("/service" , (req,res,next)=>{
    console.log("Frist Service level middleware");
    next();
}, (req,res,next)=>{
    console.log("SEcond service level middleware");
    next();
} , (req,res,next)=>{
    console.log("Third service level middleware");
    next();
},  (req,res)=>{
    res.send("This is Home Route");
})

// Database connection
mongoose.connect(process.env.MongoDB_URI).then(()=>{
    console.log("database connection successfully")
}).catch((err)=>{
     console.log("data base connection error" , err);
})

app.listen (5000, () => {
  console.log ('Server is running on port 5000');
});