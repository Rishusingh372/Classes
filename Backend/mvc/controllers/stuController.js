// const { default: mongoose } = require("mongoose");
// const { assign } = require("nodemailer/lib/shared");
const Student = require('../models/stuModel');

const homepage = ("/home", (req, res) => {
   res.render('home')
})

const aboutpage = ("/about", (req, res) => {
   res.render('about')
})
const servicepage = ("/service", (req, res) => {
   res.render('service')
});
const joinpage = ("/join", (req, res) => {
   res.render('join')
});
const contactpage = ("/contact", (req, res) => {
   res.render('contact')
});

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
   console.log(req.body);

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

  

module.exports = {
   homepage,
   aboutpage,
   servicepage,
   joinpage,
   contactpage,
   saveStudent

}