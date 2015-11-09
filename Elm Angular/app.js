"use strict";

var express = require('express'),
    http =  require('http'),
    mongodb = require('mongodb'),
    mongoose = require('mongoose'),
    async = require('async'),
    glob = require('glob'),
    bodyParser = require('body-parser');
    // fs = require('fs');
var config = require('./config.js');

var app = express();
var server = http.createServer(app);

server.listen(process.env.PORT); 
//var db = mongoose.connect('mongodb://markfamini:markfamini@ds059712.mongolab.com:59712/dataapi');
glob('./app/routes/*.js', function(err, files){
    files.forEach(function(file){
        require(file)(app);
    });
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/view')); 

console.log("Express server listening on port " + process.env.PORT);
