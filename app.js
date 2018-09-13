var express = require('express');
// to get access to the variable express, create app
var app = express();

// routes that respond to get requests
// since we're using express, don't need to tell content-type
app.get('/', function(req, res){
    res.send('this is the homepage');   
});
app.get('/contact', function(req, res){
    res.send('this is the contact page');   
});

app.get('/profile/:name', function(req, res){
    res.send('You requested to see a profile with the name of ' + req.params.name);
});
// need port 8080 for c9
app.listen(8080);