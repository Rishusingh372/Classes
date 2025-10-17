const express = require("express");
const app= express();
const bodyparser = require('body-parser')
const mongoose = require("mongoose");
const StuRoute = require("./routes/stuRoute");
app.set("view engine", "ejs");
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/adarshdb").then(()=>{
    console.log("DB Succesfully Connected!!!");
})

app.use("/students", StuRoute);
app.listen(9000, ()=>{
    console.log("Server Run on 9000 Port!");
})