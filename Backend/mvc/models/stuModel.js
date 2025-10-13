const mongoose = require('mongoose');
const stuSchema = new mongoose.Schema({
    rollNo: Number,
    name: String,
    city: String,
    fee: Number
});

module.exports = mongoose.model('Student', stuSchema);