
var express= require("express");
var app =express();
var persons= require("./router/persons");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use("/persons",persons);


app.listen(3000)