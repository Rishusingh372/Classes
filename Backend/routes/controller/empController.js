

const homePage = (req,res)=>{
    res.send("<h1>This employee home Page</h1>")
}
const aboutPage = (req,res)=>{
    res.send("<h1>This employee about Page</h1>")
}
const feePage = (req,res)=>{
    res.send("<h1>This employee fee Page</h1>")
};

module.exports={
    homePage,
    aboutPage,
    feePage


};