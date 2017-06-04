var express = require("express");
var Server = express();

Server.get("/",function(req,res){
  console.log("Home page was requested.")
  res.render("Landing.ejs")
});

Server.listen(3000,function(){
  console.log("Server is listening on Port 3000");
});
