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

// Database connection
mongoose.connect(process.env.MongoDB_URI).then(()=>{
    console.log("database connection successfully")
}).catch((err)=>{
     console.log("data base connection error" , err);
})

app.listen (5000, () => {
  console.log ('Server is running on port 5000');
});