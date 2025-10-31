const express = require('express');
const route = express.Router();
const empController = require('../controllers/empController');


route.post("/home", empController.home);
route.get("/empinfo" , empController.getinfo)
route.get("/editdata/:id" , empController.editdata);
route.put("/update/:id" , empController.updatedata);
route.delete("/delete/:id" , empController.deletedata);
route.post("/searchdata" , empController.searchdata)



module.exports = route;