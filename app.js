const express = require("express");   // Import the express module
const app = express(); // Create an instance of the Express application


// Middleware function that handles requests to the server
// app.use("/test",(req, res) => { ... }  locolhost: 3000/test then return msg
app.use((req, res) => { 
    res.send("Hello from the server!"); // Respond with a simple message
});


// Start the server and listen on port 3000
app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000..."); // Log a message when the server starts
});

