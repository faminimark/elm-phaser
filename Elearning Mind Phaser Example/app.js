
var express = require('express'),
    http =  require('http');
var app = express();

// sticky(function(){
var server = http.createServer(app);

app.use(express.static(__dirname + '/client'));

server.listen(3000);
// }).listen(80);
console.log("Express server listening on port 3000");
