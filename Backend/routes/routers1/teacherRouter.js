const express =require('express');
const route = express.Router();
const teacherRouter = require("../controller/teacherController")

route.get('/home',teacherRouter.homePage
)

route.get('/about',teacherRouter.aboutPage)

route.get('/fee',teacherRouter.feePage)


route.get('/contact',(req,res)=>{
    res.send("<h1>This is Contact page</h1>");
})



module.exports = route;