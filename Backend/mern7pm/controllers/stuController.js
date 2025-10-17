const StuModel = require("../models/stuModel");
const homePage = (req, res) => {
    res.render("home");
}
const aboutPage = (req, res) => {
    res.render("about");
}
const servicePage = async (req, res) => {
    const Student = await StuModel.find();
    res.render("service", { Data: Student });
}
const joinPage = async (req, res) => {
    const Student = await StuModel.find();
    res.render("join", { Data: Student });
}
const contactPage = (req, res) => {

    res.render("contact", { Data: [] });
}
const dataSave = async (req, res) => {
    const { rno, nm, ct, fs } = req.body;
    const Student = await StuModel.create({
        rollno: rno,
        name: nm,
        city: ct,
        fees: fs
    })
    res.render("about");
}
const dataDelete = async (req, res) => {
    const { id } = req.query;
    const Student = await StuModel.findByIdAndDelete(id);
    const stuData = await StuModel.find();
    res.render("join", { Data: stuData });
}

const dataSearch = async (req, res) => {
    const { rno } = req.body;
    const Student = await StuModel.find({ rollno: rno });
    res.render("contact", { Data: Student });
}

const dataEdit = async (req, res) => {
    const { id } = req.query;
    const Student = await StuModel.findById(id);
    res.render("editpage", { Data: Student })
}


const editdataSave = async (req, res) => {
    const { id, rno, nm, ct, fs } = req.body;

    const Student = await StuModel.findByIdAndUpdate(id, {
        rollno: rno,
        name: nm,
        city: ct,
        fees: fs
    })

      const Student1 = await StuModel.find();
    res.render("join", { Data: Student1 });
}

module.exports = {
    homePage,
    aboutPage,
    servicePage,
    joinPage,
    contactPage,
    dataSave,
    dataDelete,
    dataSearch,
    dataEdit,
    editdataSave
}
