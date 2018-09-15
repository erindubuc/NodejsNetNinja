var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// function to use middleware body-parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');

// using middleware
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.render('index');   
});
app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});   
});

app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body); 
    res.render('contact-success', {data: req.body});   
});

app.get('/profile/:name', function(req, res){
    // when a user queries a profile, we can insert more data into the view
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});
// need port 8080 for c9
app.listen(8080);