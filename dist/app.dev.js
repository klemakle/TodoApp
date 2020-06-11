"use strict";

// Modules
var express = require('express');

var mongoose = require('mongoose');

var index = require('./routes/index'); //server config


var app = express();
var port = 4000; //Conect to our db

var db = require("./config/key").MongoURI;

mongoose.set("useFindAndModify", false);
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  //open the Server
  app.listen(port, function () {
    return console.log("Server started on port ".concat(port));
  });
  console.log('MongoDB connected');
})["catch"](function (err) {
  return console.error(err);
}); //View configurations

app.set('view engine', 'ejs');
app.use("/static", express["static"]("public")); //BodyParser

app.use(express.urlencoded({
  extended: true
})); //routes index

app.use('/', index);