 const express = require('express');
 const router = express.Router();
const stuController= require('../controllers/stuController');

 router.get('/home', stuController.homepage);


 module.exports = router;