

const homePage = (req,res)=>{
    res.send("<h1>This home Page</h1>")
}
const aboutPage = (req,res)=>{
    res.send("<h1>This about Page</h1>")
}
const feePage = (req,res)=>{
    res.send("<h1>This fee Page</h1>")
};

module.exports={
    homePage,
    aboutPage,
    feePage


};