var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

// set up template engine
app.set('view engine', 'ejs');

// serve up static files 
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(process.env.port, 8080);
console.log('you are listening to port 8080');