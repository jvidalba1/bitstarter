var express = require('express');
var lib    = require('fs');
var src    = lib.readFileSync('index.html');
 
var app = express.createServer(express.logger());

buff = new Buffer( src, "utf-8");

app.get('/', function(request, response) {
  response.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
