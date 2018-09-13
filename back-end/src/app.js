var express = require('express');
var app = express();
var path = require('path')

app.use('/',express.static(path.join(__dirname,'..','dist')));

var server = app.listen(80,()=>{
   console.log('server start at 80!');
});