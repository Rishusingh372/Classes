const express = require('express');
const route = express.Router();
const stuController = require('../controllers/stuController');



route.get('/home', stuController.homepage);
route.get('/about', stuController.aboutpage);
route.get('/service', stuController.servicepage);
route.get('/serach', stuController.serachpage);
route.get('/contact', stuController.contactpage);
route.post('/save', stuController.saveStudent);
route.get('/delete', stuController.deleteStudent);
route.get('/edit',stuController.editStudent); 
route.post("/editsave", stuController.editdataSave);
route.post("/search", stuController.dataSearch);

module.exports = route;