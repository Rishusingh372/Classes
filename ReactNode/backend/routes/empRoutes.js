const express = require('express');
const route = express.Router();
const empController = require('../controllers/empController');


route.post("/home", empController.home);



module.exports = route;