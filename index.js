const express = require("express");
const { dirname } = require("path");

const app = express();
app.use(express.static("public"));

app.get("/", function (req , res){
    res.sendFile(__dirname + "/views/home.html");  
  });
app.get("/contact", function (req , res){
    res.sendFile(__dirname + "/views/contact.html");  
});
app.get("/aboutus", function (req , res){
    res.sendFile(__dirname + "/views/aboutus.html");  
  });
app.get("/services", function (req , res){
    res.sendFile(__dirname + "/views/services.html");  
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });