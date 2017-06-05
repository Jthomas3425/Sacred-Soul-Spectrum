var express = require("express");
var path = require("path")
var Server = express();

Server.use(express.static("views/Resources/img"))
Server.use(express.static("views/Resources/css")
Server.use(express.static("views/Resources/js")

Server.get("/",function(req,res){
  console.log("Home page was requested.")
  res.render("Landing.ejs")
});

Server.listen(3000,function(){
  console.log("Server is listening on Port 3000");
});
