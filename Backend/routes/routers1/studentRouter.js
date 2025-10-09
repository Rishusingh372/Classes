const express =require('express');
const route = express.Router();
const stuController = require("../controller/stuController")

route.get('/home',stuController.homePage
)

route.get('/about',stuController.aboutPage)

route.get('/fee',stuController.feePage)


route.get('/contact',(req,res)=>{
    res.send("<h1>This is Contact page</h1>");
})



module.exports = route;