const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    id: Number,
    name: String,
    location: String,
    sub: String,
    rollno: Number
});