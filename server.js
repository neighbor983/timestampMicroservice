var express = require("express");
var app = express();
var port = 8080;
var path = require('path');


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(){
   console.log('listening on port ' + port); 
});