const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  contact: String
});

module.exports = mongoose.model('Userdata', userSchema);