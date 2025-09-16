
// HTTP :- http server use for handling requests form the client and send the response to the client

// http module built-in module in node.js
// fistly import the http module
const http = require('http');

// create a server using the http module

const server = http.createServer((req, res) => {
  res.write("I am From http server");
  res.end();
});

// listen the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});


