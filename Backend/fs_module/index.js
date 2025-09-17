let fs = require('fs')

// fs.write:-
fs.writeFileSync("./demo.txt" , "hi There i am from Backend side")

// fs.read:-
let data = fs.readFileSync("./demo.txt" , "utf-8")
console.log(data)


// fs.append:- 
fs.appendFileSync("./demo.txt" , " i am appending this data")
let newdata = fs.readFileSync("./demo.txt" , "utf-8")
console.log(newdata)

// fs.unlink:-

// fs.unlinkSync("./demo.txt")
// let newdata2 = fs.readFileSync("./demo.txt" , "utf-8")
// console.log(newdata2) // it will give error as file is deleted   