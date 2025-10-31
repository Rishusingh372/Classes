const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    id: Number,
    name: String,
    location: String,
    inrollsub: String

});

module.exports = mongoose.model('Employee', empSchema);