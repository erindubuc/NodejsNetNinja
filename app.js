var express = require('express');
// to get access to the variable express, create app
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');   
});
app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');   
});

app.get('/profile/:name', function(req, res){
    // when a user queries a profile, we can insert more data into the view
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});
// need port 8080 for c9
app.listen(8080);