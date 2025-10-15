const express = require('express');
const router = express.Router();
const stuController = require('../controllers/stuController');



router.get('/home', stuController.homepage);
router.get('/about', stuController.aboutpage);
router.get('/service', stuController.servicepage);
router.get('/join', stuController.joinpage);
router.get('/contact', stuController.contactpage);
router.post('/save', stuController.saveStudent);
router.get('/delete', stuController.deleteStudent);
router.get('/edit',stuController.editStudent); 

module.exports = router;