
// HTTP :- http server use for handling requests form the client and send the response to the client

// http module built-in module in node.js
// fistly import the http module
// const http = require('http');

// create a server using the http module

// const server = http.createServer((req, res) => {
// //   res.write("I am From http server");  //normal data


// // for json data
//   res.writeHead(200, {'Content-Type': 'application/json'});
//   const data = {
//     name: "Rishu",
//     job: "Developer",
//     age: 21
//   }
//   res.write(JSON.stringify(data));
//   res.end();
// });

// // listen the server on port 3000
// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });


// import http from 'http';

// let server = http.createServer((req,res)=>{
//   if(req.url=='/'){
//     res.write("<h1>This is Home Page</h1>");
//     res.end();
//   }
    
//   else if(req.url=='/about'){
//      res.write("<h1>This is About Page</h1>");
//      res.end();
//   }
    
//   else if(req.url=='/contact')
//     res.write("<h1>This is Contact Page</h1>");
//      res.end();
// })

// res.write("<h1>Welcome to the Node Classes </h1>")
// res.end();
// })


// listen the server on port 3000
// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });



// const http = require("http");

// http.createServer((req,res)=>{
//    res.write("<h1>Welcom Node Js Classes</h1>")
//    res.end("<h3>server end....</h3>")
// })
// .listen(9000)

// ====================================================================================

// Day -2 MP Nagar Cybrom
// userdefined module
// const http = require("http");
// const clg = require("./cybrom");

// http.createServer((req,res)=>{
//    res.write("<h1>Welcom To cybrom Classes :- </h1>")
//    res.write(clg.myCollege())
//    res.write(clg.mySubject())
//    res.write(clg.myFee())
//    res.end()
// })
// .listen(8000 , ()=>{
//    console.log("Server is running on port 8000");
// })


// ===========================================================================================

// pre-defined module
// fs module :- file system module
// it is used to handle the file system in node js
// it is a built-in module in node js
// it is used to read, write, update, delete files


const http = require("http");
const fs = require("fs");  

http.createServer((req,res)=>{
   res.write("<h1>File System Module</h1>")
   fs.readFile("rishu.txt" , "utf-8" , (err,data)=>{
      if(err) throw err;
      res.write(data);
      res.end();
   })
}).listen(8000 , ()=>{
   console.log("Server is running on port 8000");
})