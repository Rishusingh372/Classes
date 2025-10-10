const express =require('express');
const route = express.Router();
const empRouter = require("../controller/empController")

route.get('/home',empRouter.homePage
)

route.get('/about',empRouter.aboutPage)

route.get('/fee',empRouter.feePage)


route.get('/contact',(req,res)=>{
    res.send("<h1>This is Contact page</h1>");
})



module.exports = route;