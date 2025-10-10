

const homePage = (req,res)=>{
    res.send("<h1>This Teacher home Page</h1>")
}
const aboutPage = (req,res)=>{
    res.send("<h1>This Teacher about Page</h1>")
}
const feePage = (req,res)=>{
    res.send("<h1>This teacher fee Page</h1>")
};

module.exports={
    homePage,
    aboutPage,
    feePage


};