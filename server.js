var express = require("express");
var app = express();
var port = 8080;
var path = require('path');
var moment = require('moment');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:datestring', function(req,res) {
  var parsedDate;
  var regEx = /^\d{8,}$/;
  if(regEx.test(req.params.datestring)) {
    parsedDate = moment(req.params.datestring, "X");
  } else {
    parsedDate = moment(req.params.datestring, "MMMM D, YYYY");
  }

  if(parsedDate.isValid()) {
    res.json({
      unix: parsedDate.format("X"),
      natural: parsedDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }


});



app.listen(port, function(){
   console.log('listening on port ' + port); 
});