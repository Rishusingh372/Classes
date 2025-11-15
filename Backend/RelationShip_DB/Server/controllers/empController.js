// ====> one to one relatonship example <====


// const UserModel = require("../models/userModel");
// const ProfileModel = require("../models/profileModel");
// const userSave = async (req, res) => {
//     const { username, email, fname, lname } = req.body;
//     const user = await UserModel.create({
//         username: username,
//         email: email
//     })
//     const profile = await ProfileModel.create({
//         fname: fname,
//         lname: lname,
//         userid:user._id
//     })
   
//     res.send("Data save!!!")
// }


// const userDisplay=async(req, res)=>{
//      const profile = await ProfileModel.find().populate("userid")
//      res.send(profile);
// }


// module.exports = {
//     userSave,
//     userDisplay
// }


// ======> one to many relationship example <=====

const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");
const userSave = async (req, res) => {
    console.log(req.body);
    const { name, address, booktitle, price } = req.body;
    const author = await AuthorModel.create({
        name: name,
        address: address
    })
    const book = await BookModel.create({
        booktitle: booktitle,
        price: price
    })
    await AuthorModel.findByIdAndUpdate(author._id, { $push: { "booksid": book._id } });
    res.send("Data save!!!")
}
const userDisplay = async (req, res) => {
    const author = await AuthorModel.find().populate("booksid");
    res.send(author);
}

const bookSave = async (req, res) => {
    const { aid, booktitle, price } = req.body;
    const book = await BookModel.create({
        booktitle: booktitle,
        price: price
    })

    await AuthorModel.findByIdAndUpdate(aid, {$push:{"booksid":book._id}});
    res.send("OKKK");
}





module.exports = {
    userSave,
    userDisplay,
    bookSave
}