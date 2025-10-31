const empschema = require('../models/empModel');
const mongoose = require("mongoose");


const home = (req,res) =>{
    const {id , name , location , sub } = req.body;

    const stuData = new stuschema({
        id : id,
        name : name,
        location : location,
        inrollsub : sub
    })
    
    stuData.save().then(()=>{
        console.log("data inserted successfully");
    }).catch((err)=>{
        console.log("error while inserting data" , err);
    })
   res.send("data inserted successfully");
}


const getinfo =  async(req,res)=>{
    const employeeData = await stuschema.find();
    res.send(employeeData)
}

const  editdata = async (req,res)=>{
    const id =  req.params.id;
    const empdata = await stuschema.findById(id);
    console.log(empdata);
    res.send(empdata);
}
const updatedata = async (req,res)=>{
    const data = req.body;
    const {id} = req.params;
    console.log(data)
    const updatedata = await stuschema.findByIdAndUpdate(id , data );
    res.send(updatedata);
}
  
const deletedata = async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const deletedata = await stuschema.findByIdAndDelete(id);
    const employeeData = await stuschema.find();
    res.send(employeeData);
}

const searchdata = async (req,res)=>{
    const {id} = req.body;
    
    const data = await stuschema.find({id:id});
    console.log(data);
    res.send(data);
}

module.exports = {
    home,
    getinfo,
    editdata,
    updatedata,
    deletedata,
    searchdata
}