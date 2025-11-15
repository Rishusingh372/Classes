// ====> one to one relatonship example <====

// const express=require("express");
// const route = express.Router();
// const EmpController = require("../controllers/empController");

// route.post("/registration", EmpController.userSave);
// route.get("/display", EmpController.userDisplay);

// module.exports=route

// ======> one to many relationship example <=====
const express=require("express");
const route = express.Router();
const EmpController = require("../controllers/empController");

route.post("/registration", EmpController.userSave);
route.get("/display", EmpController.userDisplay);
route.post("/savebook", EmpController.bookSave);

module.exports=route;