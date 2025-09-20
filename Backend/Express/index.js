const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/about",(req,res)=>{
    res.send("About Page")
})


app.listen(4001,()=>{
    console.log("Server is running on port 4001")
})

// middleware:- In Express.js (Node.js framework), middleware is basically a function that runs between the request (req) and the response (res).

// It can:
// Modify the req (request) or res (response) objects.
// Execute some logic (logging, authentication, validation, etc.).
// Call the next() function to pass control to the next middleware in the stack

// example
// function myMiddleware(req, res, next) {
//   // Do something with req or res
//   console.log("Middleware running...");

//   // Pass control to next middleware/route
//   next();
// }
// app.use(myMiddleware); // Apply middleware globally

// // You can also apply middleware to specific routes 
// app.get("/specific-route", myMiddleware, (req, res) => {
//     res.send("This route uses the middleware.");
// });

// req → The request object (data sent by client).
// res → The response object (used to send back data).
// next → A function that tells Express to move to the next middleware or route handler.

