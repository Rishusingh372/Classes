const express = require("express");
const route = express.Router();
const StuController = require("../controllers/stuController");

route.get("/home", StuController.homePage );

route.get("/about", StuController.aboutPage );

route.get("/service", StuController.servicePage );

route.get("/join", StuController.joinPage );

route.get("/contact", StuController.contactPage );

route.post("/save", StuController.dataSave);
route.get("/delete",  StuController.dataDelete);
route.post("/search", StuController.dataSearch);
route.get("/edit",  StuController.dataEdit);
route.post("/editsave", StuController.editdataSave);




module.exports = route;