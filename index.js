var express = require("express");
var path = require("path")
var Server = express();

Server.set("view engine","ejs");
Server.use(express.static("views/Resources/img"));
Server.use(express.static("views/Resources/css"));
Server.use(express.static("views/Resources/js"));
Server.use(express.static("views/Resources/semantic-ui-css"));
Server.use(express.static("views/Resources/jquery"));

Server.get("/",function(req,res){
  console.log("Home page was requested.")
  res.render("Landing")
});

Server.listen(3000,function(){
  console.log("Server is listening on Port 3000");
});
