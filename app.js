
const express = require("express");   // Import the express module
const app = express(); // Create an instance of the Express application


// Middleware function that handles requests to the server
// app.use("/test",(req, res) => { ... }  locolhost: 3000/test then return msg

// app.use("/test", (req,res)=> {          // "/" it is handle 
//     res.send("Namaste Akshay");
// });

// app.use("/hello", (req,res)=> {    // if "/hello/.... " it is also run bcz /hello/ handle this 
//     res.send("Hello hello hello");
// });

// app.get("/hello/2",(req,res)=>{   // here order matter /hello route phle hi mil gya to /hello/2 tk ja hi nahi payega  
//     res.send({firstName: "Rahul", lastname: "sharma"});
// })

// app.use("/user",(req,res)=>{   // print hahaha bcz order matter, handle every request 
//     res.send("Hahahaahaha");
// });

app.get("/user", (req, res) => {
    res.send({ firstname: "Rahul", lastname: "sharma" }); // Respond with a simple message
});

app.post("/user", (req, res) => {
    console.log("Save data to the database");
    res.send("Data successfully saved to the database!");
});

app.delete("/user", (req, res) => {
    res.send("Data Delete successfully!");
});

app.use("test", (req, res) => {
    res.send("Hello from the server!");
});



// Advance Routing 

// 1. ac , abc work 
// app.get("/ab?c",(req, res) => { 
//     res.send({firstname:"Rahul1", lastname:"sharma1"}); 
// }); 

// 2. abc it means add multiple b abbbbbc
// app.get("/ab+c",(req, res) => { 
//     res.send({firstname:"Rahul1", lastname:"sharma1"});
// }); 

//3. starting me ab hona chahiyr or last me c beech me bhale kuch bhi aaye don't matter
// app.get("/ab*c",(req, res) => { 
//     res.send({firstname:"Rahul1", lastname:"sharma1"});
// }); 

//4. abcd abcbcbcd work
// app.get("/a(bc)+d",(req, res) => { 
//     res.send({firstname:"Rahul1", lastname:"sharma1"});
// }); 

// 5. if /a/ in cab, van, man work 
// app.get(/a/,(req, res) => { 
//     res.send({firstname:"Rahul1", lastname:"sharma1"});
// }); 

// 6. if end with fly it's work butterfly, dragonfly
// app.get(/.*fly$/,(req, res) => { 
//     res.send({firstname:"Rahul1", lastname:"sharma1"});
// }); 

// 7. queary 
app.get("/user", (req, res) => {
    console.log(req.query);
    res.send({ firstname: "Rahul1", lastname: "sharma1" });
});





// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000..."); // Log a message when the server starts
});



