var express = require("express");
var app = express();

app.get('/', function(req,res,next) {
    res.send("Hello from APIS, bitches");
});

module.exports = app;
