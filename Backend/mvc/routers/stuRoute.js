const express = require('express');
const router = express.Router();
const stuController = require('../controllers/stuController');



router.get('/home', stuController.homepage);
router.get('/about', stuController.aboutpage);
router.get('/service', stuController.servicepage);
router.get('/join', stuController.joinpage);
router.get('/contact', stuController.contactpage);
router.post('/save', stuController.saveStudent);

module.exports = router;