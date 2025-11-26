const express = require("express");
const app=express();
const cors= require("cors");
const bodyparser = require('body-parser')
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const multer = require("multer");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require("./cloudinary");
const StuModel = require("./models/studentModel");

require("dotenv").config();
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB Succesfully Connected!");
})
app.use(cors());



// // configure multer storage
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname)
//     }
// })
// const upload = multer({ storage: storage });

// // Route to handle file upload
// app.post('/upload', upload.single('file'), (req, res) => {
//     res.send('File uploaded successfully');
// });


// Set up Cloudinary storage for multer
// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'product_images', // folder name Cloudinary account
        format: async (req, file) => 'jpg', // supports promises as well
        public_id: (req, file) => Date.now() + '-' + file.originalname,
    },
});


const upload = multer({ storage: storage }).array('images', 10); //image size



app.post("/upload", (req, res) => {

    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).send("Error uploading files: " + err.message);
        }

        const { rollno, name, address } = req.body;
        console.log(req.body);
        console.log(req.files);
        const imagePath = req.files.map(key => key.path);
        console.log(imagePath);

        const student = await StuModel.create({
            rollno: rollno,
            name: name,
            address: address,
            defaultImage: imagePath[0],
            images:imagePath
         });
        console.log(student);
    });
    res.send("File Uploaded!!!");
})
app.get("/display", async(req, res)=>{  
    const student = await StuModel.find();
    res.send(student);
})



const Port = process.env.PORT ;
app.listen(Port, ()=>{
    console.log(`Server run on Port ${Port}`);
})