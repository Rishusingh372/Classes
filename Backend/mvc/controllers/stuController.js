// const { default: mongoose } = require("mongoose");
// const { assign } = require("nodemailer/lib/shared");
const Student = require('../models/stuModel');

const homepage = (req, res) => {
   res.render('home')
};

const aboutpage =(req, res) => {
   res.render('about')
};
const servicepage = async  (req, res) => {
   const students = await Student.find();
   // console.log(students);
   res.render('service',{Data:students})
};
const serachpage =  (req, res) => {
   res.render('serach')
};
const contactpage = (req, res) => {
   res.render('contact')
};

// const saveStudent = async(req, res) => {
//    console.log(req.body);
//    const Student = require('../models/stuModel');
//    const newStudent = new Student({
//       rollNo: req.body.rn,
//       name: req.body.nm,
//       city: req.body.ct,
//       fee: req.body.fs
//    });
//    try {
//       await newStudent.save();
//       res.redirect('about');
//    }
//    catch (err) {
//       console.log(err);
//       res.status(500).send('Error saving student data');
//    }
// }

const saveStudent = async (req, res) => {
   const{ rn, nm, ct, fs } = req.body;
   // console.log(req.body);

   try {
      const student = await Student.create({
         rollNo: rn,
         name: nm,
         city: ct,
         fee: fs
      });
      res.redirect('about');
   } catch (err) {
      console.log(err);
      res.status(500).send('Error saving student data');
   }
}

const deleteStudent = async(req,res)=>{
   const {id} = req.query;
   const students = await Student.findByIdAndDelete(id);
   const stuData = await Student.find();
   res.render('service',{Data:stuData});
   // res.redirect('/students/service');   that also use 
}

const editStudent = async(req,res)=>{
   const {id} = req.query;
   const student = await Student.findById(id);
   console.log(student);
}
  

module.exports = {
   homepage,
   aboutpage,
   servicepage,
   serachpage,
   contactpage,
   saveStudent,
   deleteStudent,
   editStudent

}