var http = require('http');

//create variable to store method
var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    // write the response header that contains the status mssg and content-type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // end the response with text displayed to user
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1'); /*(port number, IP address)*/
console.log('yo dawgs, now listening to port 3000');