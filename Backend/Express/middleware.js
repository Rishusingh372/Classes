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


// Example in Express.js
const express = require('express');
const app = express();

// Custom Middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // move to next middleware or route
}

// Using Middleware
app.use(logger);

// Built-in Middleware
app.use(express.json()); // Parses JSON request body

// Route
app.get('/', (req, res) => {
  res.send('Hello from Middleware Example!');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(3000, () => console.log('Server running on port 3000'));



// 🚀 Famous Middleware in Express.js

// 1. express.json() → Parses JSON request body.
// 2. express.urlencoded() → Parses URL-encoded data (like form submissions).
// 3. morgan → HTTP request logger (very popular for debugging).
// 4. cors → Enables Cross-Origin Resource Sharing (for APIs).
// 5. helmet → Improves security by setting HTTP headers.
// 6. express-session → Manages user sessions.
// 7. passport → For authentication (login, OAuth, JWT, etc.).