const express = require('express');
const app = express();
const StuRoute = require("./routers/stuRoute")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/studentMVC').then(()=>{
    console.log("MongoDB connected");
}).catch((err)=>{
    console.log("MongoDB connection error:", err);
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set ('view engine', 'ejs');

app.use('/CSS', express.static('CSS'));

app.use("/students", StuRoute);
app.post("/save",StuRoute);

app.listen(8900, () => {
    console.log('Server is running on port 8900');
});