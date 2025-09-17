
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


import http from 'http';

let server = http.createServer((req,res)=>{
  if(req.url=='/'){
    res.write("<h1>This is Home Page</h1>");
    res.end();
  }
    
  else if(req.url=='/about'){
     res.write("<h1>This is About Page</h1>");
     res.end();
  }
    
  else if(req.url=='/contact')
    res.write("<h1>This is Contact Page</h1>");
     res.end();
})


// listen the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});


